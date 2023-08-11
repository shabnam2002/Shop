import React from 'react';

//icons
import facebook from '../assets/icons/facebook.png';
import gmail from "../assets/icons/gmail.svg";
import instagram from "../assets/icons/instagram.png";
import tele from "../assets/icons/tele.png";
import user from "../assets/icons/user.png";

//styles
import styles from "./Navbar.module.css"

const Navbar = () => {
 return (
   <div className={styles.container}>
     <div className={styles.gmailcontainer}>  
       <img src={gmail} alt="gmail" /> <p>hello.colorlib@gmail.com</p>
     </div>

     <div className={styles.socialcontainer}>
       <p className={styles.tele}>
         <img src={tele} alt="telephone" /> +65 11.188.888
       </p>
      
     </div>

     <div className={styles.logincontainer}>
       <button>
         Login
       </button>
     </div>
   </div>
 );
};

export default Navbar;