import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/Header'
import Inicio from '../pages/Inicio'
import '../styles/style2.css'
import Login from '../pages/Login'
import '../styles/alonso.css'
import Construccion from '../pages/Construccion'

// Nuevo componente de layout
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

createRoot(document.getElementById('root')).render(
  <Router>
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path='/' element={<Layout><Login/></Layout>}/>
        <Route path="/inicio" element={<Layout><Inicio /></Layout>} />
        <Route path="/construccion" element={<Construccion/>} />
        
      </Routes>
    </Suspense>
  </Router>
)