import React, { useEffect, useState } from 'react'
import data from '../mockData'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

  const {category} = useParams();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if(category) {
      const response = data.filter((response) => response.category === category)
      setProductList(response);
    }else {
      getProducts.then((response) => {
        setProductList(response);
      });
    }
  }, [category])

  const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000)
    })

  return (
    <ItemList lista={productList}/>
  )
}

export default ItemListContainer;