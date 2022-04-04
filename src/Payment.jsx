import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useHistory, Link } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
   const [{ basket, user }, dispatch] = useStateValue();
   const history = useHistory();
   const stripe = useStripe();
   const elements = useElements();

   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   const [totalPrice, setTotalPrice] = useState(0);
   const [totalItems, setTotalItems] = useState(0);

   useEffect(() => {
      let items = 0;
      let price = 0;

      basket.forEach((item) => {
         items += item.qty;
         price += item.qty * item.price;
      });
      setTotalItems(items);
      setTotalPrice(price);
   }, [basket, totalPrice, totalItems, setTotalPrice, setTotalItems]);

   useEffect(() => {
      // generate special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
         const response = await axios({
            method: "post",
            // stripe expects the total in currencies sub units
            url: `/payments/create?total=100`,
         });
         setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
   }, [basket]);

   console.log("The secret is >>>", clientSecret);

   const handleSubmit = async (event) => {
      //    does stripe stuffs...
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe
         .confirmCardPayment(clientSecret, {
            payment_method: {
               card: elements.getElement(CardElement),
            },
         })
         .then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db.collection("users")
               .doc(user?.uid)
               .collection("orders")
               .doc(paymentIntent.id)
               .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
               });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
               type: "EMPTY_BASKET",
            });

            history.replace("/orders");
         });
   };

   const handleChange = (event) => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
   };
   return (
      <div className="payment">
         <div className="payment__container">
            <h1>
               Checkout (
               <Link to="/checkout">
                  {basket?.length}
                  items
               </Link>
               )
            </h1>

            {/* delivery address */}
            <div className="payment__section">
               <div className="payment__title">
                  <h3>Delivery Address</h3>
               </div>
               <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>Approtech Street 54</p>
                  <p>Adenta Housing Down, Accra</p>
               </div>
            </div>
            {/* review items */}
            <div className="payment__section">
               <div className="payment__title">
                  <h3>Review items and delivery</h3>
               </div>
               <div className="payment__items">
                  {basket.map((item) => (
                     <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                     />
                  ))}
               </div>
            </div>
            {/* payment method */}
            <div className="payment__section">
               <div className="payment__title">
                  <h3>Payment Method</h3>
               </div>
               <div className="payment__details">
                  {/* stripe magic will go */}
                  <form onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange} />
                     <div className="payment__priceContainer">
                        <CurrencyFormat
                           renderText={(value) => <h3>Order Total: {value}</h3>}
                           decimalScale={2}
                           value={getBasketTotal(basket)} // home work
                           displayType={"text"}
                           thousandSeperator={true}
                           prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                           <span>
                              {processing ? <p>Processing</p> : "Buy Now"}
                           </span>
                        </button>
                     </div>
                     {/* Errors */}
                     {error && <div>{error}</div>}
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Payment;
