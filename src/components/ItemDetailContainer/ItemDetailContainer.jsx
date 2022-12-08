import data from "../mockData";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const Productos = () => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find((prod) => prod.id === id));
        }, 2000)
        
});

    return (
        <section>
            <ItemDetail lista={productList}/>
        </section> 
    );
};

export default Productos;