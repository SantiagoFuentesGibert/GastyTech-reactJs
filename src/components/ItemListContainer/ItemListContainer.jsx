import './ItemListContainer.css';
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'

const ItemListContainer = (props) => {
  const {category} = useParams();
  const [productList, setProductList] = useState([]);

  
  
  useEffect(() => {
    const getProducts = () => {
      const db = getFirestore();
      const queryBase = collection(db, 'items'); 
      const querySnapshot = category ? query(queryBase, where('categoryId', '==', category)) : queryBase;

        getDocs(querySnapshot).then((response) => {
          const data = response.docs.map((product) => {
            return { id: product.id, ...product.data()};
          });
          setProductList(data);
        })
    };
    getProducts();
  }, [category])

  return (
    <section>
      <h2>{props.titulo}</h2>
      <section>
        <ItemList lista={productList}/>
      </section>
    </section>
  )
}

export default ItemListContainer;