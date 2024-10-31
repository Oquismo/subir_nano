import React from 'react'
import { useContext } from "react";
import { UsuarioContext } from '../contexto/UsuarioContext';
import '../styles/merchan.css'
import gorra  from '../img/GorraAlonso.jpg'
import camisetaB from '../img/Camisetanormal.jpg'
import camisetaA from '../img/CamisetaAlonso.jpg'
import gorraRB from '../img/GorraRB.jpg'
import camisetaRB from '../img/CamisetaRB.jpg'
import sudadera from '../img/sudaderaRB.jpg'
import Footer from '../components/Footer';



function Merchant() {
  const {usuario} = useContext(UsuarioContext)

  return (
    <>
    <div className='Merch-Ini'>
      <h1>Hola {usuario}, bienvenido a tu tienda oficial</h1>

    </div>
    <div className='product-section'>
      <div className='product-flex'>
        <div className='product-item'>
          <h2 className='product-title'>
            <img src={gorra} alt="" />
          </h2>
          <p className='product-description'>Gorra oficial del equipo Aston Martin</p>
          <p className='product-price'>Precio: 20€</p>
          <button className='product-button'>Compra</button>
        </div>
        <div className='product-item'>
          <h2 className='product-title'>
            <img src={camisetaB} alt="" />
          </h2>
          <p className='product-description'>Camistea oficial Aston Martin</p>
          <p className='product-price'>Precio: 33€</p>
          <button className='product-button'>Compra</button>
        </div>
        <div className='product-item'>
          <h2 className='product-title'>
            <img src={camisetaA} alt="" />
          </h2>
          <p className='product-description'>Gorra oficial Fernando Alonso</p>
          <p className='product-price'>Precio: 45€</p>
          <button className='product-button'>Compra</button>
        </div>
      </div>
    </div>

    <div className='product-section'>
      <div className='product-flex'>
        <div className='product-itemRB'>
          <h2 className='product-title'>
            <img src={gorraRB} alt="" />
          </h2>
          <p className='product-description'>Gorra oficial edicion especial Red Bull</p>
          <p className='product-price'>Precio: 20€</p>
          <button className='product-button'>Compra</button>
        </div>
        <div className='product-itemRB'>
          <h2 className='product-title'>
            <img src={camisetaRB} alt="" />
          </h2>
          <p className='product-description'>Camistea oficial del equipo Red Bull</p>
          <p className='product-price'>Precio: 33€</p>
          <button className='product-button'>Compra</button>
        </div>
        <div className='product-itemRB'>
          <h2 className='product-title'> 
            <img src={sudadera} alt="" />
          </h2>
          <p className='product-description'>Sudadera oficial Red bull</p>
          <p className='product-price'>Precio: 45€</p>
          <button className='product-button'>Compra</button>
        </div>
      </div>
    </div>
<Footer/>
{/* Pagina de Merchant donde se pueden comprar productos, no tiene carrito */}
    </>
  )
}

export default Merchant