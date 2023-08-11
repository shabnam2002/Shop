import React, { useContext } from "react";

import styles from "./MiddleNavbar.module.css";
import {Link} from "react-router-dom"

//context
import { CartContext } from "../context/CartContextProvider";


//image 
import logo from "../assets/images/logo.webp";

//icon
import cart from "../assets/icons/cart.png";
import search from "../assets/icons/search.png"

const MiddleNavbar = () => {
   const { state } = useContext(CartContext);

 return (
   <div className={styles.container}>
     <div className={styles.logo}>
       <img src={logo} alt="logo" />
     </div>
     <div className={styles.links}>
       <Link to="/products">Home</Link>
       <a>Pages</a>
       <a>Blog</a>
     </div>
     <div className={styles.icon}>
       <img src={search} alt="search" />
       <Link to="/cart">
         <img src={cart} alt="cart" />
       </Link>
       <span className={styles.counter}>{state.itemCounter}</span>
     </div>
   </div>
 );
};

export default MiddleNavbar;