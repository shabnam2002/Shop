import React, { useContext } from 'react';

// Components
import Product from './shared/Product';
import Category from "../components/Category"

// Context
import { ProductsContext } from '../context/ProductContextProvider';


//styles
import styles from './store.module.css';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
          
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                            key={product.id} 
                                            productData={product} 
                                        />)
            }
        </div>
        
    );
};

export default Store;