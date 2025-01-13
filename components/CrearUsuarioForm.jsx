import React, { useState } from "react";
import axios from "axios";

function CrearUsuarioForm() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/usuarios/crear", { usuario, contrasena }) // Asegúrate de que la URL sea correcta
      .then((response) => {
        alert(response.data.mensaje);
      })
      .catch((error) => {
        console.error("Error al crear el usuario:", error);
        alert("Error al crear el usuario");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="usuario">Usuario:</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />
      <br />
      <label htmlFor="contrasena">Contraseña:</label>
      <input
        type="password"
        id="contrasena"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        required
      />
      <br />
      <button type="submit">Crear Usuario</button>
    </form>
  );
}

export default CrearUsuarioForm;