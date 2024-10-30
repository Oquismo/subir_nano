import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

<ul>



    <li>
        Términos y condiciones
    </li>
    <li>
        <Link to={"https://www.linkedin.com/in/srovettaterr%C3%B3n/"}target="_blank">Linkedln</Link>
    </li>
    <li>
        <Link to={"https://github.com/Oquismo"}target="_blank">Github</Link>
        
    </li>
</ul>
    </footer>
  );
};

export default Footer;