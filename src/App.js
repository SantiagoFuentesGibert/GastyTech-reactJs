import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider} from './components/Context/cartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
          <header >
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={'Aca va a ir una presentacion del e-comerce'}/>
              <Route path='productos' element={<ItemListContainer titulo={"Productos Descatados"}/>}/>
              <Route path='detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='contacto' element={'hola soy el contacto'}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
            </Routes>
          </main>
          <footer>
            <h2>Aca va a ir el contenido del footer</h2>
          </footer>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;