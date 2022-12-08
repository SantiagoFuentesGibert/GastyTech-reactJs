import React, {useState} from "react";


const Counter = (props) => {
    const stockDisponible = 10;
    const [stock, setStock] = useState(0);
    const sumar = () => stock < props.stock ? setStock(stock + 1) : alert('Se alcanzo el stock disponible')
    const restar = () => stock > 0 ? setStock(stock - 1) : alert('No sé pueden introducir valores negativos')
  return (
    <>
    <div>
        <div>
            <span >Stock disponible {stockDisponible}</span>
            <div>{stock}</div>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </div>
    </div>
    </>
  );
}

export default Counter;