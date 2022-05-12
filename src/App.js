import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';
import Home from './components/Home';


function App() {
  return (

    <BrowserRouter>

      <NavBar/>

      <Routes>
          
        <Route path='/' element={<Home/>}/>

        <Route path='/categories/' element={<ItemListContainer/>}/>

        <Route path='/categories/:category' element={<ItemListContainer/>}/>

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        {/* <Route path='/test' element={<Categories/>}/> */}

      </Routes>

    </BrowserRouter>

    
      

  );
}

export default App;
