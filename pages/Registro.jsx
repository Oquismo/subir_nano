import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const redireccionar = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosRegistro = {
      usuario,
      correo_usuario: correo,
      contrasena
    };

    // Enviar datos al servidor para registrar el usuario
    axios
      .post('https://subir-nano-server.vercel.app/usuarios/register', datosRegistro)
      .then((response) => {
        setMensaje(response.data.mensaje);
        if (response.data.mensaje === 'Usuario registrado correctamente') {
          // Redirigir al login si el registro es exitoso
          redireccionar('/');
        }
      })
      .catch((error) => {
        setMensaje('Hubo un error al registrar el usuario');
        console.error(error);
      });
  };

  return (
    <div className="registroStyle">
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default Registro;
