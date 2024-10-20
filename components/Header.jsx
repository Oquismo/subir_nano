import React from 'react'
import logo from '../img/logo hd.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className="header">
          <img src={logo} className="logo" alt="Logo F1" />
          <ul className="lista">
            <li className="elemento__lista">Contacto</li>
            <li className="elemento__lista" ><Link to={'/'}>Login</Link></li>
            <li className="elemento__lista" ><Link to={'/construccion'}>Construcción</Link></li>
          
            <a href='./merchan.html' target="_blank"><li className="elemento__lista"><Link to={'/merchan'}>Merchan</Link></li></a>
          </ul>
          <form action="0" method="get" className="elemento__lista">
           
          </form>
          <p className="login"></p>
        </div>
      </header>
    </>
  )
}

export default Header