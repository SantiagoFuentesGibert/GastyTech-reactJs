import React from 'react'
import './CardWidget.css'
import imgCarrito from '../../img/carrito-1.png' 

const CardWidget = () => {
  return (
    <div className='carrito'>
        <img className='carritoImg' src={imgCarrito} alt="Cantidad de productos en carrito" />
        <div className='carritoCounter'>{5}</div>
    </div>
  )
}

export default CardWidget;