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
            <li className="elemento__lista">Contacto</li>
            <li className="elemento__lista"><Link to={'/'}> Inicio </Link></li>
            {usuario === null?<li className="elemento__lista"><Link to={'/login'}>Login</Link></li>: <></>}

            <li className="elemento__lista">
              <Link to={"/construccion"}>Construcción</Link>
            </li>

            <a href="./merchan.html" target="_blank">
              <li className="elemento__lista">
                <Link to={"/merchan"}>Merchan</Link>
              </li>
            </a>
          </ul>
          <form action="0" method="get" className="elemento__lista"></form>
          <p className="login"></p>
        </div>
        <div
          style={{
            left: 0,
            width: "20%",
            height: 0,
            position: "relative",
            paddingBottom: "5%",
            margin: "0 auto",
          }}
        >
          <iframe
            src="https://www.tickcounter.com/widget/countdown/5984312"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              border: 0,
              overflow: "hidden",
            }}
            title="GP 2025"
          ></iframe>
        </div>
      </header>
    </>
  );
}

export default Header;
