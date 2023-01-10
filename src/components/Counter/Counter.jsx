import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Counter.css'

const Counter = ({stockProductos, stock, setStock}) => {
    const MySwal = withReactContent(Swal)
    const sumar = () => stock <  stockProductos ? setStock(stock + 1) : MySwal.fire({
      icon: 'warning',
      title: 'Se alcanzó el stock disponible',
      text: 'Presioná OK para continuar comprando',
    });
    const restar = () => stock > 1 ? setStock(stock - 1) : Swal.fire({
      icon: 'error',
      title: 'No se pueden ingresar valores menores a uno',
      text: "Presioná OK para continuar comprando"});
  return (
    <>
    <div className="contenedorCounter">
        <div className="counter">
            <div className="stockDisponible">{stock}</div>
            <button className="botonCounterRestar" onClick={restar}>-</button>
            <button className="botonCounterSumar" onClick={sumar}>+</button>
        </div>
    </div>
    </>
  );
}

export default Counter;