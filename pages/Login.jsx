import React from 'react'
import axios from 'axios'
import { useRef, useState, useContext} from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
import { useNavigate } from 'react-router-dom'


function Login() {

const redireccionar = useNavigate()

const { login} = useContext(UsuarioContext);

const [error, setError] = useState('')

const usuarioRef = useRef()

const contrasenaRef = useRef()

function checkearUsuario (e) {
  e.preventDefault();

  let objetoAMandar = {

    usuario: usuarioRef.current.value,
    contrasena: contrasenaRef.current.value

  }
// axios.post('https://subir-nano-server.vercel.app/usuarios', objetoAMandar).then(datos=>{ IMPORTANTE CAMBIAR A SU SERVIDOR!!!})
axios.post('http://localhost:3000/usuarios', objetoAMandar).then(datos=>{

  if(datos.data.mensajeError == 'usuario no encontrado'){
    setError('El usuario o la contraseña no son correctos')
  }else{
    login(datos.data.usuario)
    redireccionar('/inicio')
  }
})
}




  return (
    <>

    <h1>Iniciar sesión</h1>
    <form action="#" method='post' onSubmit={checkearUsuario}>
      <label htmlFor="usu">Nombre de Usuario: </label>
      <input type="text" name='usuario' id='usu' ref={usuarioRef} /> <br />
      <label htmlFor="pass">Contraseña </label>
      <input type="password" name='password' id='pass'  ref={contrasenaRef}/> <br />

      <input type="submit" value=' iniciar Sesion ' /> <br />
      {error}
      
    </form>
    </>
  )
}

export default Login
