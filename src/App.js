import './App.css';
import NavBar from './components/NavBar/NavBar';
import Inicio from './Inicio/Inicio';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/cartProvider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
          <header >
            <NavBar />
          </header>
          <main className='productosMain'>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='productos' element={<ItemListContainer titulo={"Productos Descatados"}/>}/>
              <Route path='detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='cart' element={<Cart/>}/>
            </Routes>
          </main>
          <footer>
            <Footer/>
          </footer>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;