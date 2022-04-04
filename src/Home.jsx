import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
   return (
      <div className="home">
         <div className="home__container">
            <img
               className="home__image"
               src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
            />
            <div className="box"></div>
            <div className="home__row">
               {/* 2 component Product */}
               <Product
                  id="12321341"
                  title="DualShock 4 Wireless Controller for PlayStation 4"
                  price={29.99}
                  image="https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
                  rating={5}
               />
               <Product
                  id="49538094"
                  title="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
                  price={17.99}
                  image="https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg"
                  rating={4}
               />
            </div>
            <div className="home__row">
               {/* 3 component Product*/}
               <Product
                  id="4903850"
                  title="Sony a7 Camera with 3-Inch LCD, Black"
                  price={1698.0}
                  image="https://images-na.ssl-images-amazon.com/images/I/81zewshg2eL._AC_SL1500_.jpg"
                  rating={4}
               />
               <Product
                  id="23445930"
                  title="Men's Classic Manhattan Trilby Fedora Hat"
                  price={14.99}
                  image="https://m.media-amazon.com/images/I/71jyeBkk7ML._AC_SX679._SX._UX._SY._UY_.jpg"
                  rating={3}
               />
               <Product
                  id="3254354345"
                  title="
                  AmazonBasics Carrying Case for Nintendo Switch"
                  price={13.29}
                  image="https://images-na.ssl-images-amazon.com/images/I/91WeigIwOHL._SL1500_.jpg"
                  rating={4}
               />
            </div>
            <div className="home__row">
               {/* 1 component Product*/}
               <Product
                  id="90829332"
                  title="
                  SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White"
                  price={699.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg"
                  rating={5}
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
