import React from 'react';


//image
import category1 from "../assets/images/category1.webp";
import category2 from "../assets/images/category2.webp";
import category3 from "../assets/images/category3.webp";
import category4 from "../assets/images/category4.webp";
import category5 from "../assets/images/category5.webp";

//css
import styles from "./Category.module.css";


const Category = () => {
 return (
   <div className={styles.container}>
     <div className={styles.maincategory}>
       <h2>Women’s fashion</h2>
       <a>SHOP NOW</a>
       <img src={category1} />
     </div>

     <div className={styles.aside}>
       <div className={styles.category2}>
         <h2>Men’s fashion</h2>
         <a>SHOP NOW</a>
         <img src={category2} />
       </div>
       <div className={styles.category3}>
         <h2>Kid’s fashion</h2>
         <a>SHOP NOW</a>
         <img src={category3} />
       </div>
       <div className={styles.category4}>
         <h2>Cosmetics</h2>
         <a>SHOP NOW</a>
         <img src={category4} />
       </div>
       <div className={styles.category5}>
         <h2>Accessories</h2>
         <a>SHOP NOW</a>
         <img src={category5} />
       </div>
     </div>
   </div>
 );
};

export default Category;