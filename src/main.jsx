import React from "react";

// Importando el componente "Router" de "react-router-dom" para manejar las rutas de la aplicación
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importando el componente "Suspense" de "react" para mostrar un mensaje de carga mientras se cargan los componentes
import { Suspense } from "react";

// Importando la función "createRoot" de "react-dom/client" para crear una instancia de React DOM
// Importando los componentes "Header", "Inicio", "Login", "LogOut", "Galeria" y "Merchant" y los estilos
import { createRoot } from "react-dom/client";
import Header from "../components/Header";
import Inicio from "../pages/Inicio";
import "../styles/style2.css";
import Login from "../pages/Login";
import "../styles/logout.css";
import Merchant from "../pages/Merchant";
import Galeria from "../pages/Galeria";
import "../styles/tailwind.css";
// import Noticias from "../pages/Noticias.astro";

// Importando el contexto "UsuarioProvider" para proporcionar información sobre el usuario autenticado a los componentes
import { UsuarioProvider } from "../contexto/UsuarioContext";
import "../styles/loginStyle.css";

// Importando la función "RutaPrivada" para proteger las rutas de la aplicación
import RutaPrivada from "./RutaPrivada";
import LogOut from "../pages/LogOut";
import InicioInvitado from "../pages/InicioInvitado";
import HeaderInvitado from "../components/HeaderInvitado";
import HeaderOtros from "../components/HeaderOtros";
import "../styles/merchan.css";
import "../styles/footer.css";
import "../styles/galeria.css";
import "../styles/registro.css";

import App from './App';
import Registro from "../pages/Registro";  // Importar el formulario de Registro

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const LayoutInvitado = ({ children }) => (
  <>
    <HeaderInvitado />
    {children}
  </>
);

const LayoutAtras = ({ children }) => (
  <>
    <HeaderOtros />
    {children}
  </>
);

// Renderiza la aplicación en la instancia de React DOM
createRoot(document.getElementById("root")).render(
  <Router>
    <UsuarioProvider>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {/* Ruta de login */}
          <Route path="/" element={<Login />} />
          
          {/* Ruta para el registro de usuario */}
          <Route path="/registro" element={<Registro />} />

          {/* Ruta para el logout */}
          <Route
            path="/logout"
            element={<RutaPrivada ComponenteQueQuieroPintar={<LogOut />} />}
          />
          
          {/* Ruta para el inicio de usuario invitado */}
          <Route
            path="/inicioInvitado"
            element={
              <LayoutInvitado>
                <InicioInvitado />
              </LayoutInvitado>
            }
          /> 

          {/* Ruta privada para el inicio */}
          <Route
            path="/inicio"
            element={
              <Layout>
                <RutaPrivada ComponenteQueQuieroPintar={<Inicio />} />
              </Layout>
            }
          />
          
          {/* Ruta para la galería */}
          <Route
            path="/galeria"
            element={
              <LayoutAtras>
                <Galeria />
              </LayoutAtras>
            }
          />

          {/* Ruta para la app */}
          <Route
            path="/app"
            element={
              <LayoutAtras>
                <App />
              </LayoutAtras>
            }
          />
          
          {/* Otras rutas comentadas si las necesitas */}
          {/* <Route
            path="/noticias"
            element={
              <LayoutAtras>
                <Noticias />
              </LayoutAtras>
            }
          /> */}
        </Routes>
      </Suspense>
    </UsuarioProvider>
  </Router>
);
