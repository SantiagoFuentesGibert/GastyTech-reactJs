import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import './ItemDetail.css'
import { CartContext} from '../Context/cartContext'

const ItemDetail = ({lista}) => {
    const [stock, setStock] = useState(1);
    const { addToCart} = useContext(CartContext);
    function onAdd(product) {
        addToCart(product, stock)
    };
    return (
        <article>
            <img src={lista.img} alt={lista.nombre} className="imgProdDetail"/>
            <div>
                <h2>{lista.nombre}</h2>
                <p>{lista.description}</p>
                <p>$ {lista.price}</p>
                <p>Disponibles: {lista.stock}</p>
                <Counter stockProductos={lista.stock} stock={stock} setStock={setStock}/>
                <button onClick={() => onAdd(lista)}>Agregar al carrito</button>
                <Link to={'/cart'}>Ir al carrito</Link>
            </div>
            <Link to={"/"}>Volver al Home</Link>
        </article>
    );
}

export default ItemDetail;