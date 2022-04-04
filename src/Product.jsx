import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
   

   const [{ basket }, dispatch] = useStateValue();
   

   console.log("this is the basket>>>>", basket);
   const addToBasket = () => {
      //dispatch the item into the dater layer
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            // qty: value
            // cartQuantity: cartQuantity,
         },
      });
   };

   return (
      <div className="product">
         <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
            <div className="product__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>⭐</p>
                  ))}
            </div>
         </div>

         <img
            src={image}
            alt="" // height="150"
         />

         <button onClick={addToBasket}>Add to busket</button>
      </div>
   );
}

export default Product;


