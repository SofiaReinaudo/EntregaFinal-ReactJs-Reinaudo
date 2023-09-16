import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderPage from "./components/OrderPage/OrderPage";
import Login from "./components/Login/Login";
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <CartWidget/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"¡Nuestros productos!💗"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order/:orderId" element={<OrderPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
