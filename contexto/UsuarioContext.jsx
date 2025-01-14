import { useState, createContext } from "react";

// Creando el contexto de usuario
export const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    // Estado para almacenar el usuario actual
    const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));

    // Función para iniciar sesión y almacenar los datos del usuario
    const login = (datosUsu) => {
        localStorage.setItem('usuario', datosUsu);
        setUsuario(datosUsu);
    };

    // Función para cerrar sesión y eliminar los datos del usuario
    const logout = () => {
        localStorage.removeItem('usuario');
        setUsuario(null);
    };

    return (
        // Proporciona el estado y las funciones al componente
        <UsuarioContext.Provider value={{ usuario, login, logout }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioProvider };