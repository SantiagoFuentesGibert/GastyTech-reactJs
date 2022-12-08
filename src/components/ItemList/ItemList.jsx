import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const ItemList = ({lista}) => {
  return (
    <div>
        {lista.map((product) => (
        <Link 
        key={product.id}
        to={`/detail/` + product.id}>
            <Item  product={product}/>
        </Link>
    ))
    }
    </div>
  )
}

export default ItemList;