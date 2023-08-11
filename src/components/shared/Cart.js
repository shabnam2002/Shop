import React , {useContext} from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//function
import { shorten } from '../../helper/functions';

//icons
import trashicon from '../../assets/icons/iconstrash.svg';

//styles
import styles from './Cart.module.css'

const Cart = (props) => {
 const {dispatch} = useContext(CartContext);

 const {image,title,price,quantity} = props.data;
 return (
   <div className={styles.container}>
     <div>
       <img src={image} alt="product" className={styles.img} />
     </div>
     <div>
       <h3>{shorten(title)}</h3>
       <p className={styles.price}>{price}$</p>
     </div>
     <div>
       <span className={styles.quantity}>{quantity}</span>
     </div>
     <div>
       {quantity > 1 ? (
         <button className={styles.decrease}    onClick={() => dispatch({ type: "DECERESE", payload: props.data })}
         >
           -
         </button>
       ) : (
         <button
           className={styles.trash}
           onClick={() =>
             dispatch({ type: "REMOVE-ITEM", payload: props.data })
           }
         >
           <img src={trashicon} alt="trash" />
         </button>
       )}
       <button
         className={styles.increase}
         onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
       >
         +
       </button>
     </div>
   </div>
 );
};

export default Cart;