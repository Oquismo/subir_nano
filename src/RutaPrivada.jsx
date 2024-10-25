import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'

function RutaPrivada( {ComponenteQueQuieroPintar}){

    const { usuario } = useContext(UsuarioContext);

  return (
    <>
 {usuario == null ? <Navigate to={'/login'}/>: ComponenteQueQuieroPintar}

 </>
  )
}

export default RutaPrivada
