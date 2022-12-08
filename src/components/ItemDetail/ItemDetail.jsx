import React from "react";
/* import Counter from "../Counter/Counter"; */
import './ItemDetail.css'

const ItemDetail = ({lista}) => {
    return (
        <article>
            <img src={lista.img} alt={lista.nombre} className="imgProdDetail"/>
            <div>
                <h2>{lista.nombre}</h2>
                <p>{lista.detail}</p>
                <p>$ {lista.precio}</p>
            </div>
            {/* <Counter /> */} {/* DEJO EL COUNTER PARA QUE YA QUEDE PORQUE PENSE QUE ERA PARTE DE LA ENTREGA PERO EN REALIDAD NO Y NO LO IMPLEMNTO PORQUE NO FUNCIONA CORRECTAMENTE */}
            <button>{lista.btn}</button>
        </article>
    );
}

export default ItemDetail;