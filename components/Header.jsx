import React, { useContext, useState } from 'react'
import logo from '../img/logo hd.png'
import { Link } from 'react-router-dom'
import { usuarioContext } from '../contexto/UsuarioContext'
function Header() {
  const { usuario, setUsuario } = useContext(usuarioContext)
  const [contrasena, setContrasena] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <header>
        <div className="header">
          <img src={logo} className="logo" alt="Logo F1" />
          <ul className="lista">
            <li className="elemento__lista">Contacto</li>
            {/* <li className="elemento__lista" ><Link to={'/'}>Inicio</Link></li> */}
            <li className="elemento__lista" ><Link to={'/'}>Construcción</Link></li>
            {usuario == null? <li className='elemento__lista' ><Link to={'inicio'}>Inicio</Link></li>:<></>}
            <a href='./merchan.html' target="_blank"><li className="elemento__lista">Merchandising</li></a>
          </ul>
          <form action="0" method="get" className="elemento__lista">
            <input type="text" name="nombre" id="nom" className="header_input" placeholder="Buscar" />
          </form>
          <p className="login"></p>
          
        </div>
      </header>
    </>
  )
}

export default Header