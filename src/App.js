import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/categories/Categories';
import ItemDetailContainer from './components/container/ItemDetailContainer';


function App() {
  return (

    <BrowserRouter>

      <NavBar>
        <CartWidget/>
      </NavBar>

      <Routes>
          
        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categories/:id' element={<Categories/>}/>

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        <Route path='/test' element={<ItemDetailContainer/>}/>

      </Routes>

    </BrowserRouter>

    
      

  );
}

export default App;
