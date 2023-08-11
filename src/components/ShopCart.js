import React,{useContext} from 'react';
import Cart from './shared/Cart';
import {Link} from 'react-router-dom';

//context
import { CartContext } from '../context/CartContextProvider';

//styles
import styles from './ShopCart.module.css';

const ShopCart = () => {
const {state , dispatch} = useContext(CartContext)

 return (
   <div className={styles.container}>
     <div>  {state.selectedItem.map(item => <Cart key={item.id} data={item} />)} </div>
{ state.itemCounter > 0 && 
<div className={styles.containertotla}>
<p><span className={styles.title} >Total Item:</span>{state.itemCounter}</p>
<p><span className={styles.title}>Total Payment:</span>{state.total}</p>
<div>
 <button onClick={() => dispatch({type:"CHECKOUT"})}>Check Out</button>
  <button onClick={() => dispatch({type:"CLEAR"})}> Clear</button>

</div>

 </div>
}
{ state.checkout && <div>
  <h3>check out successfully</h3>
  <Link to="/products">Buy More</Link>
 </div>
}
{
 !state.checkout && state.itemCounter === 0 && <div>
  <h3>Want To Buy?</h3>
  <Link to="/products">Go Back To Shop</Link>
 </div>
}



   </div>
 );
};

export default ShopCart;