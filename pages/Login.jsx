import React from 'react'
import axios from 'axios'
import { useRef, useState, useContext} from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



function Login() {

const redireccionar = useNavigate()

const { login} = useContext(UsuarioContext);

const [error, setError] = useState('')

const usuarioRef = useRef()

const contrasenaRef = useRef()

function checkearUsuario (e) {
  e.preventDefault();
// Esta funcion comprueba que el usuario y contraseña sean correctos, si no lo son mandara un mensaje indicandolo
  let objetoAMandar = {

    usuario: usuarioRef.current.value,
    contrasena: contrasenaRef.current.value

  }




axios.post('https://subir-nano-server.vercel.app/usuarios', objetoAMandar).then(datos=>{

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


    <h1 >Iniciar sesión</h1>
    <form className='logStyle' action="#" method='post' onSubmit={checkearUsuario}>
      <label htmlFor="usu"> Nombre de Usuario:  </label>
      <input type="text" name='usuario' id='usu' ref={usuarioRef} /> <br />
      <label htmlFor="pass">Contraseña: </label>
      <input type="password" name='password' id='pass'  ref={contrasenaRef}/> <br />
      <input type="submit" value=' iniciar Sesion ' /> <br />
      {error}
    </form>
    <Link to={'/inicioInvitado'}>
  <input className='InviteButton' type="submit" value=' Entrar como invitado' />
</Link>
    </>
  )
}
// Login totalmente funcional con opcion de entrar como invitado
export default Login
