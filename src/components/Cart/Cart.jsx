import './Cart.css'
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import moment from 'moment'

const rutaInicial = '../images/'

const Cart = () => {
    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: 0,
            email: '',
        },
        items: [],
        total: 0,
        date: '',
    })
    
    const navigate = useNavigate();
    const {cart, removeItem, clear} = useContext(CartContext);
    const db = getFirestore();
    
    const createOrder = () => {
        setOrder((currentOrder) => {
            return{
                ...currentOrder, 
                items: cart, 
                total: cart.reduce((acc, item) => acc + item.price * item.stock, 0),
                date: moment().format('DD/MM/YYYY, h:mm:ss a'),
            };
        });
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) => {
            console.log(id);
            updateStockProducts();
            alert('Gracias por confiar en nosotros')
        })
        .catch(() => {
            alert('La compra no se puedo realizar con exito, por favor vuelva a intentar mas tarde')
        })
};

    const updateStockProducts = () => {
    cart.forEach((product) => {
        const queryUpdate = doc(db, 'items', product.id);
        updateDoc(queryUpdate, {
            categoryId: product.categoryId,
            description: product.description,
            image: product.image,
            nombre: product.nombre,
            price: product.price,
            stock: product.stock - product.cantidad
        }).then(() => {
            if(cart[cart.length - 1].id === product.id) {
                clear();
                navigate('/productos');
            }
        }).catch(() => {
            console.log('error');
        })
    });
}

    return (
        <div className='productosEnElCarrito'>
            <h1>Carrito</h1>
            {cart.length === 0 ? 
            (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link className="volver" to={'/productos'}>Volver a comprar</Link>
                </>
            ) : 
            (
                <>
                    {cart.map((item) => (
                    <div key={item.id} className="productosCarritoInfo">
                        <img src={rutaInicial + item.img} alt="Imagen del producto" className="imgCarritoInfo"/>
                        <div>
                            <div className="infoProductos">
                                <h3>Producto</h3>
                                <h4>{item.nombre}</h4>
                            </div>
                            <div className="infoProductos">
                                <h3>Cantidad</h3>
                                <p>{item.cantidad}</p>
                            </div>
                            <div className="infoProductos">
                                <h3>Precio</h3>
                                <p>${item.price}</p>
                            </div>
                            <button className="btnEliminarCarrito" onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                        </div>
                        
                    </div>
                    ))}
                    <div>
                        <button className="btnCrearOrden" onClick={createOrder}>
                            Crear orden
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart;