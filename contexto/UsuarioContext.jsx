import { useState, createContext } from "react";

// Comentarios para esta página
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
        // Proporciona el estado y las funciones al componente hijo
        <UsuarioContext.Provider value={{ usuario, login, logout }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioProvider };