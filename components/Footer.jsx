import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {/* Enlace a los "términos y condiciones" */}
        <li>
          Términos y condiciones
        </li>
        {/* Enlace a mi perfil de LinkedIn */}
        <li>
          <Link to={"https://www.linkedin.com/in/srovettaterr%C3%B3n/"} target="_blank">LinkedIn</Link>
        </li>
        {/* Enlace a mi perfil de GitHub */}
        <li>
          <Link to={"https://github.com/Oquismo"} target="_blank">GitHub</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

// Simple footer en la que he redirecionado a mi pagina de linkedin y github