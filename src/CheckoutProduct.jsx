<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
   id,
   image,
   title,
   price,
   rating,
   hideButton,
   itemData,
}) {
   const [{ basket, user }, dispatch] = useStateValue(); // we aint using the dispatch here
   const [input, setInput] = useState(itemData?.qty);

=======
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
   const [{ basket }, dispatch] = useStateValue();
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
   const removeFromBasket = () => {
      //remove item from the basket
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      });
   };
<<<<<<< HEAD
   const Increase = () => {
      setInput(input + 1);
      dispatch({
         type: "INCREASE",
         item: {
            id: itemData.id,
            qty: input + 1,
         },
      });
   };
   const Decrease = () => {
      setInput(input - 1);
      dispatch({
         type: "DECREASE",
         item: {
            id: itemData.id,
            qty: input - 1,
         },
      });
   };
   if (input === 0) {
      removeFromBasket();
   }
=======
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
   return (
      <div className="checkoutProduct">
         <img className="checkoutProduct__image" src={image} alt="" />

         <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
<<<<<<< HEAD
            <p className="checkoutProduct__price">
               <strong onClick={Increase}>+</strong>
               <strong style={{ margin: 10 }}>{input}</strong>
               <strong onClick={Decrease}>-</strong>
            </p>
=======
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
            <div className="checkoutProduct__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>⭐</p>
                  ))}
            </div>
<<<<<<< HEAD
            {!hideButton && (
               <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
=======
            <button onClick={removeFromBasket}>Remove from Basket</button>
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
         </div>
      </div>
   );
}

export default CheckoutProduct;
