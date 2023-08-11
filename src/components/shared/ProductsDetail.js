import React, { useContext } from 'react';
import {Link} from 'react-router-dom';



//context
import { ProductsContext } from '../../context/ProductContextProvider';

//styles
import styles from "./ProductDetails.module.css";


const ProductsDetail = (props) => {
const id = props.match.params.id;
const data = useContext(ProductsContext);
const product = data[id-1];
const {image , title , description , category , price} = product;

 return (
<div>
    <div className={styles.container}>
   <div className={styles.header}>
    <img className={styles.img}  src={image} alt='product'/>
   </div>
   <div className={styles.decrip}>
   <h3 className={styles.title}>{title}</h3>
   <p className={styles.description}>{description}</p>
   <p><span className={styles.category}>category: </span>{category}</p>
 <span className={styles.price}>price:{price}$</span>
<div className={styles.but}>
<Link to='/products' className={styles.back}>Back to shop</Link>
</div>
   </div>
  </div>
</div>
 );
};

export default ProductsDetail;