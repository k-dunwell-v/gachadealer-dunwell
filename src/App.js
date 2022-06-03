import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Order from './components/pages/Order';
import Shipping from './components/pages/Shipping';
import CartProvider from './components/context/CartContext';
import CheckoutContainer from './components/checkout/CheckoutContainer';


function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <NavBar/>

        <Routes>
        
          <Route path='/' element={<ItemListContainer categories={false}/>}/>

          <Route path='/categories/' element={<ItemListContainer categories={true}/>}/>

          <Route path='/categories/:category' element={<ItemListContainer/>}/>

          <Route path='/item/:id' element={<ItemDetailContainer/>}/>

          <Route path='/order/' element={<Order/>}/>

          <Route path='/shipping/' element={<Shipping/>}/>

          <Route path='/cart/' element={<CheckoutContainer/>}/>

        </Routes>

      </BrowserRouter>

    </CartProvider>

    
      

  );
}

export default App;
