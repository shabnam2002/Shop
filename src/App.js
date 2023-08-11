import './App.css';
import {Switch , Route , Redirect} from  'react-router-dom';

// Components
import Store from './components/Store';
import ProductsDetail from './components/shared/ProductsDetail';
import ShopCart from './components/ShopCart';
import Navbar from "./components/Navbar";
import MiddleNavbar from "./components/MiddleNavbar";
import Category from "./components/Category";


// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';




function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <MiddleNavbar />
        <Switch>
          <Route path="/products/:id" component={ProductsDetail} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
