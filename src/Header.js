<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
<<<<<<< HEAD
   const [{ basket, user }, dispatch] = useStateValue(); // we aint using the dispatch here

   const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
      let count = 0;
      basket.forEach((item) => {
         count += item.qty;
      });
      setCartCount(count);
   }, [basket, cartCount]);
=======
   const [{ basket, user }, dsipatch] = useStateValue(); // we aint using the dispatch here
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8

   const handleAuthentication = () => {
      if (user) {
         auth.signOut();
      }
   };
   return (
      // Header
      <div className="header">
         <Link to="/">
            <img
               className="header__logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
         </Link>
         {/* search */}
<<<<<<< HEAD
=======
         '/'{" "}
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
         <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
         </div>
         <div className="header__nav">
            <Link to={!user && "/login"}>
               <div onClick={handleAuthentication} className="header__option">
                  <span className="header__optionLineOne">
                     Hello {user ? user.email : "Guest"}
                  </span>
                  {/* <h3 className="header__optionLineOne">Hello {user.email}</h3> */}
                  <span className="header__optionLinetwo">
                     {user ? "sign Out" : "Sign In"}
                  </span>
               </div>
            </Link>

<<<<<<< HEAD
            <Link to="/Orders">
               <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLinetwo">& Orders</span>
               </div>
            </Link>
=======
            <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
               <span className="header__optionLinetwo">& Orders</span>
            </div>
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
            <div className="header__option">
               <span className="header__optionLineOne">Your</span>
               <span className="header__optionLinetwo">Prime</span>
            </div>
<<<<<<< HEAD
            <Link to="/checkout">
               <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">
                     {cartCount}
                  </span>
               </div>
            </Link>
         </div>
=======
         </div>
         <Link to="/checkout">
            <div className="header__optionBasket">
               <ShoppingBasketIcon />
               <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
               </span>
            </div>
         </Link>
>>>>>>> c6ab857ea39bb9d61eea455000ec066c2aba39b8
      </div>
   );
}

export default Header;
