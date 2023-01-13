import './Item.css'

const rutaInicial = '../images/'

const Item = ({product}) => {
  return (
    <article className='productos'>
        <img src={rutaInicial + product.img} alt={product.nombre} className="imgProductos"/>
        <div className='productos--info'>
          <h2>{product.nombre}</h2>
          <span>${product.price}</span>
          <sapn>Cantidad: {product.stock}</sapn>
        </div>
    </article>
  )
}

export default Item