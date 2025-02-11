import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ListaContactos from './components/ListaContactos.jsx'
import NuevoContacto from './components/NuevoContacto.jsx'
import EditarContacto from './components/EditarContacto.jsx'
import injectContext from './store/AppContext.jsx'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListaContactos />} />
      <Route path="/NuevoContacto" element={<NuevoContacto />} />
      <Route path="/EditarContacto" element={<EditarContacto />} />
    </Routes>
  </BrowserRouter>
  )
}
export default injectContext(App);