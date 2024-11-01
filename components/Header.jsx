import React from "react";
import { Suspense } from "react";
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
            {usuario !== null && (
          
          <li className="elemento__lista">
          
          <Link to={'/logout'}> Cerrar Sesión </Link>
          </li>
         
            )}
            <li className="elemento__lista">
              <Link to={"/galeria"}>Galeria</Link>
            </li>

          
              <li className="elemento__lista">
                <Link to={"/merchan"}>Merchan</Link>
          
              </li>
              
          
            
          </ul>
          <form action="0" method="get" className="elemento__lista"></form>
          <p className="login"></p>
          <h1 className="elemento__lista">Hola de nuevo ! <br /> {usuario} </h1>
        </div>
        
      </header>
     
    </>
  );
}

export default Header;

// Header completo que se vera una vez inicies sesion y te deja entrar en las demas paginas 
