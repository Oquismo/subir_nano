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


const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

createRoot(document.getElementById('root')).render(
  <Router>
    <UsuarioProvider>
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Inicio" element={<Layout><Inicio /></Layout>} />
        <Route path="/construccion" element={<Construccion/>} />
        <Route path="/merchan" element={<Layout><Merchan /></Layout>} />

        
      </Routes>
    </Suspense>
    </UsuarioProvider>
  </Router>
)