import React, { useRef, useState } from "react";
import axios from "axios";
import CrearUsuarioForm from "../components/CrearUsuarioForm";
import { useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const usuarioRef = useRef();
  const contrasenaRef = useRef();
  const [error, setError] = useState("");
  const redireccionar = useNavigate()
  const { login} = useContext(UsuarioContext);

  const checkearUsuario = (event) => {
    event.preventDefault();

    const objetoAMandar = {
      usuario: usuarioRef.current.value,
      contrasena: contrasenaRef.current.value,
    };

    axios.post('https://subir-nano-server.vercel.app/usuarios', objetoAMandar).then(datos => {
      if (datos.data.mensajeError === 'usuario no encontrado') {
        setError('El usuario o la contraseña no son correctos');
      } else {
        login(datos.data.usuario);
        redireccionar('/inicio');
      }
    });
  };

  return (
    <>
      <h1>Iniciar sesión</h1>
      <form className='logStyle' action="#" method='post' onSubmit={checkearUsuario}>
        <label htmlFor="usu">Nombre de Usuario:</label>
        <input type="text" name='usuario' id='usu' ref={usuarioRef} /> <br />
        <label htmlFor="pass">Contraseña:</label>
        <input type="password" name='password' id='pass' ref={contrasenaRef} /> <br />
        <input type="submit" value='Iniciar Sesión' /> <br />
        {error}
      </form>
      <h2>Crear Usuario</h2>
      <CrearUsuarioForm />
      <Link to={'/inicioInvitado'}>
        <input className='InviteButton' type="submit" value=' Entrar como invitado' />
      </Link>
    </>
  );
}

export default Login;
