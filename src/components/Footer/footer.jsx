import './footer.css'
import imgFooter from '../../img/gastytech.jpg'
import igFooter from '../../img/instagram.png'
import fcFooter from '../../img/facebook.png'

const footer = () => {
  return (
    <div className='footer'>
        <img src={imgFooter} alt='footer img' className='imgFooter'/>
        <div>
            <div>Direccion: Calle 12435, Buenos Aires</div>
            <div>Telefóno: 11-2345-6789</div>
            <div>Horarios: Lun a Vie de 10hs a 19hs</div>
        </div>
        <div className='redesOrden'>
          <img src={igFooter} className='redesFooter'/>
          <img src={fcFooter} className='redesFooter'/>
        </div>
    </div>
  )
}

export default footer;