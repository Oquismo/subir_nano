import { useState, createContext, } from "react";

const usuarioContext = createContext();

const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(localStorage.getItem('usuario'));

    const login = (datosUsu) => {
        localStorage.setItem('usuario', datosUsu);
        setUsuario(datosUsu);

        
    }

    const logout = () => {

        localStorage.removeItem('usuario');
        setUsuario(null);
    }

        return(
            <usuarioContext.Provider value={{ usuario, login, logout }}>
                {children}
            </usuarioContext.Provider>

        )
}

export { usuarioContext, UsuarioProvider };

