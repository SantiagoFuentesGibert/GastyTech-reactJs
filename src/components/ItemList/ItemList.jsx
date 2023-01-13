import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({lista}) => {
  return (
    <div className='prueba'>
        {lista.map((product) => (
        <Link 
        key={product.id}
        to={`/detail/` + product.id}
        style={{textDecoration:"none", color:"black"}}
        >
          <Item  product={product}/>
        </Link>
        ))}
    </div>
  )
}

export default ItemList;