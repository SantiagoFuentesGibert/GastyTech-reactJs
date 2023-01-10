import './Item.css'

const Item = ({product}) => {
  return (
    <article className='productos'>
        <img src={product.img} alt={product.nombre} className="imgProductos"/>
        <h2>{product.nombre}</h2>
        <span>${product.price}</span>
        <sapn>Cantidad: {product.stock}</sapn>
    </article>
  )
}

export default Item