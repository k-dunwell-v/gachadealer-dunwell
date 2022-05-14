import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Home from './components/Home';
import Order from './components/pages/Order';
import Shipping from './components/pages/Shipping';
import CartProvider from './components/context/CartContext';
import Cart from './components/Cart';


function App() {
  return (

    <CartProvider>

      <BrowserRouter>

        <NavBar/>

        <Cart></Cart>

        <Routes>
        
          <Route path='/' element={<Home/>}/>

          <Route path='/categories/' element={<ItemListContainer/>}/>

          <Route path='/categories/:category' element={<ItemListContainer/>}/>

          <Route path='/item/:id' element={<ItemDetailContainer/>}/>

          <Route path='/order/' element={<Order/>}/>

          <Route path='/shipping/' element={<Shipping/>}/>

          <Route path='/cart/' element={<Cart/>}/>

        </Routes>

      </BrowserRouter>

    </CartProvider>

    
      

  );
}

export default App;
