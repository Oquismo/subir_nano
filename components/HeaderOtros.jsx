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
          <li className="elemento__lista">
          <Link to={'/inicio'}>Volver a Inicio</Link>
          </li>
            {/* <li className="elemento__lista"><Link to={'/logout'}> Cerrar Sesion </Link></li> */}
            {usuario !== null && (
          <li className="elemento__lista">
          <Link to={'/logout'}> Cerrar Sesión </Link>
          </li>
            )}
            {usuario === null?<li className="elemento__lista"><Link to={'/'}>Login</Link></li>: <></>}

            <li className="elemento__lista">
              <Link to={"/galeria"}>Galeria</Link>
            </li>

          
              <li className="elemento__lista">
                <Link to={"/merchan"}>Merchan</Link>
          
              </li>

          </ul>
          <form action="0" method="get" className="elemento__lista"></form>
          <p className="login"></p>
        </div>
      </header>
    </>
  );
}

export default Header;

// Header hecho para la ruta merch en el que se añade la opcion de volver atras
