import React, { useState, useEffect } from "react";
import mediano from "../img/mediano.jpeg";
import horarios from "../img/horarios.jpeg";
import axios from "axios";
import Footer from "../components/Footer";


function Inicio() {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [traerEscuderia, setTaerEscuderia] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_URL_ESCUDERIA)
      .then((resultados) => {
        setTaerEscuderia(resultados.data);
      })
      .catch((error) => {
        console.log(error);
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  // Función para traer las escuderías que se pintan más abajo
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
            <h4>Noticias</h4>
            Aston Martin ya prepara mejoras,
            {showMore ? (
              <>
                el equipo de Silverstone trabaja a contrarreloj para mejorar un
                coche que a día de hoy resta mucho de lo que fue el año pasado.
                <br /> En sus declaraciones el piloto asturiano ha anunciado que
                se encuentra muy motivado y que van "en buena dirección". <br />
              </>
            ) : (
              <span id="puntos">...</span>
            )}
          </p>
          <button onClick={readMore} id="botoncito" className="botonleerMas">
            {showMore ? "Leer menos" : "Leer más"}
          </button>
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
                <br /> <br />
                <p>
                  -Gran Premio de Melbourne <br />
                  Circuito: Albert Park, Australia Fecha: 10 de marzo de 2024
                  <br />
                </p>
                <p>
                  -Gran Premio de Shanghái <br />
                  Circuito: Circuito Internacional de Shanghái, China <br />{" "}
                  Fecha: 24 de marzo de 2024 <br />
                </p>
                <p>
                  -Gran Premio de Mónaco <br />
                  Circuito: Circuito de Mónaco, Montecarlo <br />
                  Fecha: 14 de abril de 2024
                </p>
                <p>
                  -Gran Premio de Silverstone <br />
                  Circuito: Silverstone, Reino Unido <br />
                  Fecha: 28 de abril de 2024
                </p>{" "}
                <br />
              </>
            )}
          </p>
          <button onClick={readMore2} id="botoncito" className="botonleerMas">
            {showMore2 ? "Leer menos" : "Leer más"}
          </button>
        </div>
      </section>
      
    

      <h1 className="tite__card">Conoce la parrilla</h1>
      <section className="escuderias-grid">
        {traerEscuderia.map((escuderia) => (
          <div className="escuderia-card" key={escuderia.id_escuderia}>
            <h3>Equipo</h3>
            <h1>{escuderia.nombre_escuderia}</h1>
            <p>Piloto</p>
            <h4>{escuderia.nombre_piloto}</h4>
            
          </div>
        ))}
      </section>

      
      <Footer />
    </>
  );
}

export default Inicio;
