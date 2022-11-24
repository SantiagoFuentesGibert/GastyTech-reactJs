import React from 'react'
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <div className='navBar'>
        <ul className='navBar navBarMenu'>
            <li>Home</li>
            <li>Productos</li>
            <li>FAQ</li>
            <li>Contacto</li>
        </ul>
        <CardWidget/>
    </div>
  )
}

export default NavBar;