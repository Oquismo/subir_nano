import React, { useState } from 'react'
import logo from '../img/logo hd.png'

function Header() {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    //borrar por el momento solo en consola
    console.log('Intento de inicio de sesión:', usuario, contrasena)
  }

  return (
    <>
      <header>
        <div className="header">
          <img src={logo} className="logo" alt="f1 logo"/>
          <ul className="lista">
            <li className="elemento__lista">Contacto</li>
            <li className="elemento__lista">Horarios</li>
            <a href='./merchan.html' target="_blank"><li className="elemento__lista">Merchandising</li></a>
          </ul>
          <form action="0" method="get" className="elemento__lista">
            <input type="text" name="nombre" id="nom" className="header_input" placeholder="Buscar"/>
          </form>
          
          <p className="login"></p>
          
          <form onSubmit={handleLogin} className="login">
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="login"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login">Iniciar sesión</button>
          </form>
        </div>
      </header>
    </>
  )
}

export default Header