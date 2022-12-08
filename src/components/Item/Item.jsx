import React from 'react'
import './Item.css'

const Item = ({product}) => {
  return (
    <article className='productos'>
        <img src={product.img} className="imgProductos"/>
        <h2>{product.nombre}</h2>
        <span>${product.precio}</span>
    </article>
  )
}

export default Item