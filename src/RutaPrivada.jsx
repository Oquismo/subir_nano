// Importando la biblioteca React para crear componentes de interfaz de usuario

import React from "react";
// Importando el hook "useContext" de React para obtener el valor de un contexto

import { useContext } from "react";
// Importando el contexto "UsuarioContext" que contiene información sobre el usuario autenticado

import { UsuarioContext } from "../contexto/UsuarioContext";

// Definiendo una función "RutaPrivada" que toma un componente como argumento y devuelve otro componente que verifica si el usuario está autenticado

function RutaPrivada({ ComponenteQueQuieroPintar }) {
  // Utilizando el hook "useContext" para obtener el valor del contexto "UsuarioContext"

  const { usuario } = useContext(UsuarioContext);
  // Si el usuario no está autenticado, redirige a la página de login

  return (
    <>
      {usuario == null ? <Navigate to={"/login"} /> : ComponenteQueQuieroPintar}
    </>
  );
}
// Exportando la función "RutaPrivada" para su uso en otros componentes

export default RutaPrivada;
