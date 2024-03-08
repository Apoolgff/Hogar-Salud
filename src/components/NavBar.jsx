import React from 'react'
import '../styles/NavBar.css'
import health from '../../public/image/Health.svg'

function NavBar() {
  return (
    <nav className="navbar">
        <img src={health} alt="heart" />
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Inicio</a></li>
        <li className="nav-item"><a href="#">Acerca de</a></li>
        <li className="nav-item"><a href="#">Servicios</a></li>
        <li className="nav-item"><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default NavBar