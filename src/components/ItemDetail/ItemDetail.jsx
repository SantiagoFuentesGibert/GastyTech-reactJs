import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import './ItemDetail.css'
import { CartContext} from '../Context/cartContext'

const rutaInicial = '../images/'

const ItemDetail = ({lista}) => {
    const [stock, setStock] = useState(1);
    const { addToCart} = useContext(CartContext);
    function onAdd(product) {
        addToCart(product, stock)
    };
    return (
        <article className="productosDetail">
            <img src={rutaInicial + lista.img} alt={lista.nombre} className="imgProdDetail"/>
            <div className="productosDetail--info">
                <h2>{lista.nombre}</h2>
                <p>{lista.description}</p>
                <p>$ {lista.price}</p>
                <p>Disponibles: {lista.stock}</p>
                <Counter className="counter" stockProductos={lista.stock} stock={stock} setStock={setStock}/>
                <button onClick={() => onAdd(lista)} className="butonAddtoCart">Agregar al carrito</button>
                <Link className="carritoOrHome" to={'/cart'}>Ir al carrito</Link>
                <Link className="carritoOrHome" to={"/"}>Volver al Home</Link>
            </div>
        </article>
    );
}

export default ItemDetail;