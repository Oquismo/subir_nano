import React from 'react'

import { useContext } from 'react'

import { UsuarioContext } from '../contexto/UsuarioContext'

import { useNavigate } from 'react-router-dom';

function logOut() {

    const{logout} = useContext(UsuarioContext);
    
    const redirect = useNavigate();

    function noQuiero(){
        redirect('/inicio')
    }

    function siQuiero(){
        logout();
        redirect('/')
    }

  return (
  <>
  <h1>Quieres cerrar sesion?  </h1><br/>
  
  <button className='cerrar_sesion' type='button' onClick={noQuiero}>No</button>
  <button className='cerrar_sesion' type='button' onClick={siQuiero}>Si</button>
  </>

  )
}
//Con esto se genera el cierre de sesion 
export default logOut
