import imgMother from '../img/GIGA.jpg'
import imgGpu from '../img/30502.jpg'
import imgRam from '../img/corsair.png'
import imgCpu from '../img/INTEL.jpg'

const data = [
    {
        id: '1',
        nombre: 'Mother',
        detail: 'Procesador LGA1700 socket: Support for 12th Generation Intel® Core™, Pentium® Gold and Celeron® Processors* L3 cache varies with CPU * Please refer to "CPU Support List" for more information. Chipset Intel® Z690 Express Chipset. Memoria Support for DDR4',
        precio: '56.000',
        img: imgMother,
        btn: 'Agregar al carrito',
        category: 'Mothers'
    },
    {
        id: '2',
        nombre: 'GPU',
        detail: 'GPU RTX 3060 Asus ROG Strix 8gb OC 4k RGB AuraSync',
        precio: '120.000',
        img: imgGpu,
        btn: 'Agregar al carrito',
        category: 'GPU'
    },
    {
        id: '3',
        nombre: 'RAM',
        detail: 'RAM Corsair 5200Mhz 32gb',
        precio: '32.000',
        img: imgRam,
        btn: 'Agregar al carrito',
        category: 'RAM'
    },
    {
        id: '4',
        nombre: 'CPU',
        detail: 'Procesador 12 núcleos / 20 hilos. 8 núcleos de rendimiento (3,6 GHz - 5,0 GHz) + 4 núcleos eficientes (2,7 GHz - 3,8 GHz). Caché L3 25 MB + Caché L2 12 MB. Desbloqueado (multiplicador desbloqueado para el overclocking)IGP : Gráficos Intel UHD 770',
        precio: '65.000',
        img: imgCpu,
        btn: 'Agregar al carrito',
        category: 'CPU'
    }
]

export default data; 