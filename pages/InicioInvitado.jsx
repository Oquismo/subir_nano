import React, { useState, useRef, useContext } from "react";
import mediano from "../img/mediano.jpeg";
import horarios from "../img/horarios.jpeg";
import Footer from "../components/Footer";


function Inicio() {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const readMore = () => {
    setShowMore(!showMore);
  };

  const readMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <>
      <section className="contenedor">
        <div className="card">
          <img src={mediano} alt="f1" className="card_imagen" />
          <p id="inicio__texto">
            Aston Martin ya prepara mejoras,
            {showMore ? (
              <>
          
              </>
            ) : (
              <span id="puntos">...</span>
            )}
          </p>
          <button onClick={readMore} id="botoncito" className="botonleerMas">
            {showMore ? "Inicia sesion para ver" : "Leer más"}
          </button>
          <nav className="redes__redes" style={{ "--count": 4 }}>
            <ul className="lista__redes">
              <li style={{ "--index": 1 }}>
                <a
                  className="botoncito__colorado"
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      ></path>{" "}
                    </svg>
                    Redes
                  </span>
                </a>
              </li>
              <li style={{ "--index": 2 }}>
                <a
                  className="botoncito__colorado"
                  href="x.com"
                  target="__blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                    Twitter
                  </span>
                </a>
              </li>
              <li style={{ "--index": 3 }}>
                <a
                  className="botoncito__colorado"
                  href="https://www.linkedin.com/in/srovettaterr%C3%B3n/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                    Linkedln
                  </span>
                </a>
              </li>
              <li style={{ "--index": 4 }}>
                <a
                  className="botoncito__colorado"
                  href="https://soymotor.com/f1/calendario"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    Horarios
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="card2">
          <img
            src={horarios}
            id="SegundaImagen"
            alt="f1"
            className="card_imagen"
          />
          <h3>Calendario</h3>
          <p>
            Aquí podrás encontrar los horarios de las carreras del F1
            {showMore2 && (
              <>
                <br />
                <p></p>
              </>
            )}
          </p>
          <button onClick={readMore2} id="botoncito" className="botonleerMas">
            {showMore2 ? "Inicia sesion para ver" : "Leer más"}
          </button>
          <nav className="redes__redes" style={{ "--count": 4 }}>
            <ul className="lista__redes">
              <li style={{ "--index": 1 }}>
                <a
                  className="botoncito__colorado"
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      ></path>{" "}
                    </svg>
                    Redes
                  </span>
                </a>
              </li>
              <li style={{ "--index": 2 }}>
                <a
                  className="botoncito__colorado"
                  href="x.com"
                  target="__blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                    Twitter
                  </span>
                </a>
              </li>
              <li style={{ "--index": 3 }}>
                <a
                  className="botoncito__colorado"
                  href="https://www.linkedin.com/in/srovettaterr%C3%B3n/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                    Linkedln
                  </span>
                </a>
              </li>
              <li style={{ "--index": 4 }}>
                <a
                  className="botoncito__colorado"
                  href="https://soymotor.com/f1/calendario"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    Horarios
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <div></div>
      <h1 className="tite__card" >Conoce la parrilla</h1>
      <h4 className="title__card" > inicia sesion para ver mas </h4>
      <Footer/>

 


    </>
  );
}
// Este inicio de invitado es el mismo que el anterior pero retirando algunas funciones por lo que es necesario iniciar sesion para verlas
//  las funciones retiradas como podreis observar son que al darle a los botones de noticias y calendario te 
// pide que inicies sesion para poder verlos.
// Tambien oculta los datos de pilotos y escuderias y algunas funciones del header 
export default Inicio;
