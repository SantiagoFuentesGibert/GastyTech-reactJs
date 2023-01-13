import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
        <ul className='navBar navBarMenu'>
            <li>
              <NavLink to={'/'} className='navBarMenu--decoration'>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={'/productos'} className='navBarMenu--decoration'>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Mothers Intel'} className='navBarMenu--decoration'>
                Mothers Intel
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Mothers AMD'} className='navBarMenu--decoration'>
                Mothers AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Procesadores Intel'} className='navBarMenu--decoration'>
                Procesadores Intel
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Procesadores AMD'} className='navBarMenu--decoration'>
                Procesadores AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Placa de video GeForce'} className='navBarMenu--decoration'>
                Placas de video GeForce
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Placa de video Radeon AMD'} className='navBarMenu--decoration'>
                Placas de video Radeon AMD
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/Memoria RAM DDR5'} className='navBarMenu--decoration'>
                Memoria RAM DDR5
              </NavLink>
            </li>
        </ul>
        <Link to={'cart'}><CardWidget /></Link>
    </div>
  )
}

export default NavBar;