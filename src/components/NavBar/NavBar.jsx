import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom';

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
              <NavLink to={'/category/Mothers'}>
                Mothers
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/CPU'}>
                CPU
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/GPU'}>
                GPU
              </NavLink>
            </li>
            <li>
              <NavLink to={'/category/RAM'}>
                RAM
              </NavLink>
            </li>
        </ul>
        <CardWidget/>
    </div>
  )
}

export default NavBar;