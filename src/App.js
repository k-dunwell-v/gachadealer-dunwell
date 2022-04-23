import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <div className="App">

      <strong>Japanese merchandise seller</strong>

      <NavBar>
        <CartWidget/>
      </NavBar>

      <ItemListContainer greet="GachaDealer"/>



    </div>
  );
}

export default App;
