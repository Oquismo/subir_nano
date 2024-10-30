import React from 'react'
import { useContext } from "react";
import { UsuarioContext } from '../contexto/UsuarioContext';
import '../styles/merchan.css'
import gorra  from '../img/camisetaA.avif'

import camisetaA from '../img/gorraG.avif'
import camisetaRB from '../img/CamisetaRB.avif'
import gorraRB from '../img/gorraRB.avif'
import sudadera from '../img/sudaderaRB.webp'

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
{/* tienda 2 */}
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



    </>
  )
}

export default Merchant