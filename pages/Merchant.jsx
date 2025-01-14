import React from 'react';
import { useContext } from "react";
import { UsuarioContext } from '../contexto/UsuarioContext';
import '../styles/merchan.css';
import gorra from '../img/GorraAlonso.jpg';
import camisetaB from '../img/Camisetanormal.jpg';
import camisetaA from '../img/CamisetaAlonso.jpg';
import gorraRB from '../img/GorraRB.jpg';
import camisetaRB from '../img/CamisetaRB.jpg';
import sudadera from '../img/sudaderaRB.jpg';
import Footer from '../components/Footer';

function Merchant() {
  // Obteniendo el usuario del contexto
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <div className='Merch-Ini'>
        {/* Mensaje de bienvenida personalizado */}
        <h1>Hola {usuario}, bienvenido a tu tienda oficial</h1>
      </div>
      <div className='product-section'>
        <div className='product-flex'>
          {/* Producto: Gorra oficial del equipo Aston Martin */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={gorra} alt="" />
            </h2>
            <p className='product-description'>Gorra oficial del equipo Aston Martin</p>
            <p className='product-price'>Precio: 20€</p>
            <button className='product-button'>Compra</button>
          </div>
          {/* Producto: Camiseta normal */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={camisetaB} alt="" />
            </h2>
            <p className='product-description'>Camiseta normal</p>
            <p className='product-price'>Precio: 15€</p>
            <button className='product-button'>Compra</button>
          </div>
          {/* Producto: Camiseta de Alonso */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={camisetaA} alt="" />
            </h2>
            <p className='product-description'>Camiseta de Alonso</p>
            <p className='product-price'>Precio: 25€</p>
            <button className='product-button'>Compra</button>
          </div>
          {/* Producto: Gorra Red Bull */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={gorraRB} alt="" />
            </h2>
            <p className='product-description'>Gorra Red Bull</p>
            <p className='product-price'>Precio: 20€</p>
            <button className='product-button'>Compra</button>
          </div>
          {/* Producto: Camiseta Red Bull */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={camisetaRB} alt="" />
            </h2>
            <p className='product-description'>Camiseta Red Bull</p>
            <p className='product-price'>Precio: 30€</p>
            <button className='product-button'>Compra</button>
          </div>
          {/* Producto: Sudadera Red Bull */}
          <div className='product-item'>
            <h2 className='product-title'>
              <img src={sudadera} alt="" />
            </h2>
            <p className='product-description'>Sudadera Red Bull</p>
            <p className='product-price'>Precio: 50€</p>
            <button className='product-button'>Compra</button>
          </div>
        </div>
      </div>
      {/* Componente Footer */}
      <Footer />
    </>
  );
}

export default Merchant;