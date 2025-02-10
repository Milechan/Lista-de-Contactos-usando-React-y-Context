import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListaContactos from './components/ListaContactos.jsx'
import NuevoContacto from './components/NuevoContacto.jsx'
import EditarContacto from './components/EditarContacto.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListaContactos />} />
      <Route path="/NuevoContacto" element={<NuevoContacto />} />
      <Route path="/EditarContacto/:id" element={<EditarContacto/>} />
    </Routes>
  </BrowserRouter>
)
