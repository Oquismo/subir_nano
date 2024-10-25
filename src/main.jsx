import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header'
import Inicio from '../pages/Inicio'
import '../styles/style2.css'
import Login from '../pages/Login'
import '../styles/alonso.css'
import Construccion from '../pages/Construccion'
import { UsuarioProvider } from '../contexto/UsuarioContext'
import Merchan from '../pages/Merchan'
import '../styles/loginStyle.css'
import RutaPrivada from './RutaPrivada'
import LogOut from '../pages/LogOut'
import InicioInvitado from '../pages/InicioInvitado'
import HeaderInvitado from '../components/HeaderInvitado'
import HeaderOtros from '../components/HeaderOtros'
import '../styles/merchan.css'



const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

const LayoutInvitado = ({ children }) => (
  <>
    <HeaderInvitado />
    {children}
  </>
)

const LayoutAtras= ({ children }) => (
  <>
    <HeaderOtros />
    {children}
  </>
)


createRoot(document.getElementById('root')).render(
  <Router>
    <UsuarioProvider>
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/logout" element={<RutaPrivada ComponenteQueQuieroPintar={<LogOut/>}/>}/>
        <Route path="/inicioInvitado" element={<LayoutInvitado><InicioInvitado/></LayoutInvitado>}/> //prueba borrar linea 
        <Route path="/inicio" element={<Layout><RutaPrivada ComponenteQueQuieroPintar={<Inicio/>}/></Layout>}/>
        <Route path="/construccion" element={<Construccion/>} />
        <Route path="/merchan" element={<LayoutAtras><Merchan /></LayoutAtras>} />

        
      </Routes>
    </Suspense>
    </UsuarioProvider>
  </Router>
)