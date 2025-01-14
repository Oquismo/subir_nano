import React from "react";
import logo from "../img/logo hd.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexto/UsuarioContext";

function Header() {

  // Obteniendo el usuario del contexto
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <header>
        <ul>
          <li>
          </li>
        </ul>
       
        <div className="header">
          {/* Logo de la aplicación */}
          <img src={logo} className="logo" alt="Logo F1" />
          <ul className="lista">
            {/* Enlace de contacto */}
            <li className="elemento__listaInvitado">Contacto</li>
            {/* Mostrar enlace de cerrar sesión si el usuario está autenticado */}
            {usuario !== null && (
              <li className="elemento__listaInvitado">
              </li>
            )}
            {/* Mostrar enlace de login si el usuario no está autenticado */}
            {usuario === null ? (
              <li className="elemento__listaInvitado">
                <Link to={'/'}>Login</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <form action="0" method="get" className="elemento__listaInvitado"></form>
          <p className="login"></p>
        </div>
      </header>
    </>
  );
}

export default Header;