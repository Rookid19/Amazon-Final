import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
   const [{ basket, user }, dispatch] = useStateValue();
   console.log("basekt---->" + basket);

   // hello
   const emptyBasket = () => {
      //dispatch the item into the dater layer
      dispatch({
         type: "EMPTY_BASKET",
      });
   };

   return (
      <div className="checkout">
         <div className="checkout__left">
            <img
               className="checkout__ad"
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt=""
            />
            <h3>Hello, {user?.email}</h3>
            <div>
<<<<<<< HEAD
               <div className="h">
                  <h2 className="checkout__title">Your shopping Basket</h2>
                  <button onClick={emptyBasket}>Remove from Basket</button>
               </div>

               {basket.map((item) => (
                  <CheckoutProduct
                     key={item.id}
=======
               <h2 className="checkout__title">Your shopping Basket</h2>
               {/* <CheckoutProduct
                  id="12321341"
                  title="DualShock 4 Wireless Controller for PlayStation 4"
                  price={29.99}
                  image="https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
                  rating={5}
               /> */}
               {basket.map((item) => (
                  <CheckoutProduct
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
<<<<<<< HEAD
                     itemData={item}
                  />
               ))}
=======
                  />
               ))}
               ;
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
            </div>
         </div>

         <div className="checkout__right">
            <Subtotal />
         </div>
      </div>
   );
}

export default Checkout;
