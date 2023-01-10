import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
        <ul className='navBar navBarMenu'>
            <li>
              <NavLink to={'/'}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={'/productos'}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to={'/contacto'}>
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Mothers Intel'}>
                Mothers Intel
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Mothers AMD'}>
                Mothers AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Procesadores Intel'}>
                Procesadores Intel
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Procesadores AMD'}>
                Procesadores AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Placa de video GeForce'}>
                Placas de video GeForce
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Placa de video Radeon AMD'}>
                Placas de video Radeon AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Memoria RAM DDR5'}>
                Memoria RAM DDR5
              </NavLink>
            </li>
        </ul>
        <Link to={'cart'}><CardWidget /></Link>
    </div>
  )
}

export default NavBar;