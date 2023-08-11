import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

// Functions
import { shorten , isInCart , quantityCount} from '../../helper/functions';

//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import trash from '../../assets/icons/iconstrash.svg';



//style
import styles from "./Product.module.css";

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext)

    return (
        
        <div className={styles.container}>
            <img className={styles.img} src={productData.image} alt="product" />
            <h3 className={styles.title}>{shorten(productData.title)}</h3>
            <p className={styles.price} >{productData.price}$</p>
            <div className={styles.linkcontainer}>
                <Link className={styles.detail} to={`products/${productData.id}`}>Details</Link>
                <div>
                    { quantityCount(state,productData.id) > 1 && <button className={styles.decrease} onClick={() => dispatch({type:"DECERESE" , payload:productData})}>-</button>}
                    { quantityCount(state,productData.id) === 1 && <button className={styles.trash} onClick={() => dispatch({type:"REMOVE-ITEM" , payload:productData})}><img src={trash} alt='trashicon' /></button>}
                   { quantityCount(state,productData.id) > 0 && <span className={styles.counter} >{quantityCount(state,productData.id)}</span>}


                {
                    isInCart(state,productData.id) ? 
                    <button className={styles.increase} onClick={() => dispatch({type:"INCREASE" , payload:productData})}>+</button> :
                     <button className={styles.addtocart} onClick={() => dispatch({type:"ADD-ITEM" , payload:productData})}>add to cart</button>
                     
                }


                </div>
            </div>
        </div>
    );
};

export default Product;