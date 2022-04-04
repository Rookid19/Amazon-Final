<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
   // Payment page
   const history = useHistory();
   const [{ basket }, dsipatch] = useStateValue(); // we aint using the dispatch here

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

=======
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
   const [{ basket }, dsipatch] = useStateValue(); // we aint using the dispatch here

>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     {/* Home work */}
<<<<<<< HEAD
                     Subtotal (<strong>{totalItems}</strong>items):
=======
                     Subtotal (<strong>{basket?.length}</strong>items):
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
                     <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                     <input type="checkbox" /> This order contains a gift
                  </small>
               </>
            )}
            decimalScale={2}
<<<<<<< HEAD
            value={totalPrice} // home work
=======
            value={getBasketTotal(basket)} // home work
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
         />

<<<<<<< HEAD
         <button onClick={(e) => history.push("/payment")}>
            Proceed to Checkout
            
         </button>
=======
         <button>Proceed to Checkout</button>
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
      </div>
   );
}

export default Subtotal;
