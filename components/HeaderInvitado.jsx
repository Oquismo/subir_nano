import React from "react";
import logo from "../img/logo hd.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexto/UsuarioContext";

function Header() {

const {usuario} = useContext(UsuarioContext)

  return (
    <>
    
      <header>
        <ul>
          <li>
          </li>
        </ul>
       
        <div className="header">
          <img src={logo} className="logo" alt="Logo F1" />
          <ul className="lista">
            <li className="elemento__listaInvitado">Contacto</li>
            {/* <li className="elemento__lista"><Link to={'/logout'}> Cerrar Sesion </Link></li> */}
            {usuario !== null && (
          <li className="elemento__listaInvitado">
          </li>
            )}
            {usuario === null?<li className="elemento__listaInvitado"><Link to={'/'}>Login</Link></li>: <></>}
          </ul>
          <form action="0" method="get" className="elemento__listaInvitado"></form>
          <p className="login"></p>
        </div>
      </header>
    </>
  );
}

export default Header;

// Header para la opcion entrar como invitado en el que no se llegan a mostrar todas las rutas 