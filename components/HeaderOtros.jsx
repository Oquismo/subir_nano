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
            {/* Enlace para volver a la página de inicio */}
            <li className="elemento__lista">
              <Link to={'/inicio'}>Volver a Inicio</Link>
            </li>
            {/* Mostrar enlace de cerrar sesión si el usuario está autenticado */}
            {usuario !== null && (
              <li className="elemento__lista">
                <Link to={'/logout'}> Cerrar Sesión </Link>
              </li>
            )}
            {/* Mostrar enlace de login si el usuario no está autenticado */}
            {usuario === null ? (
              <li className="elemento__lista">
                <Link to={'/'}>Login</Link>
              </li>
            ) : (
              <></>
            )}
            {/* Enlace a la galería */}
            <li className="elemento__lista">
              <Link to={"/galeria"}>Galeria</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
