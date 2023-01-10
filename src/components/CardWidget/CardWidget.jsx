import imgCarrito from '../../img/carrito-1.png' 
import './CardWidget.css'
import { useContext } from 'react'
import { CartContext} from '../Context/cartContext'

const CardWidget = () => {
  const {totalItems} = useContext(CartContext)
  return (
    <button className='carrito'>
        <img className='carritoImg' src={imgCarrito} alt="Cantidad de productos en carrito" />
        <div className='carritoCounter'>{totalItems () > 0 ? totalItems() : "0"}</div>
    </button>
  )
}

export default CardWidget;