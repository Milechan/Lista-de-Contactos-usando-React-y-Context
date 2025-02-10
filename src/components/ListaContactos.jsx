import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import "../App.css"

const ListaContactos = () => {
    const [contactos, setContactos] = useState([])
    const navigate = useNavigate()
    async function obtenerContactos() {
        try {
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile/contacts", {
                method: "GET"
            })
            const data = await request.json()
            console.log(data)
            setContactos(data.contacts)
        } catch (error) {
            console.error("no se pueden obtener contactos")
            console.error(error)
        }

    }
    function irANuevoContacto() {
        navigate("/NuevoContacto")
    }
    async function crearAgenda() {
        try {
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile", {
                method: "POST"
            }
            )
            const data = await request.json()
            console.log(data)
        } catch (error) {
            console.error("no se puede crear la agenda")
            console.error(error)
        }

    }
    async function eliminarContacto(id) {
        try {
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile/contacts/"+id, {
                method: "DELETE"
            })
           
           await obtenerContactos()
        } catch (error) {
            console.error("no se pudo eliminar el contacto")
            console.error(error)
        }

    }
    useEffect(() => {
        crearAgenda()
        obtenerContactos()
    }, [])
    return (
        <div>
        
            <button className="botonNuevo btn btn-success " onClick={() => irANuevoContacto()}>Nuevo Contacto </button>
            {contactos.map((contacto) => {
                return (
                    <div className="contenedorContacto">
                        <div className="fotoContacto"><img className="foto"src="https://pbs.twimg.com/media/GhxGBqxWIAAE8XZ.jpg:large" alt="imagen Contacto" /></div>
                        <div className='infoContacto'  >
                            <div className="nombreDeContacto">{contacto.name}</div>
                            <div><i class="fa-solid fa-location-dot"></i>{contacto.address}</div>
                            <div><i class="fa-solid fa-phone"></i>{contacto.phone}</div>
                            <div><i class="fa-solid fa-envelope"></i>{contacto.email}</div>
                        </div>
                        <div className="botonesContacto">
                            <button className="btn btn-warning editar"><i class="fa-solid fa-pencil"></i></button>
                            <button className="btn btn-danger eliminar" onClick={() => [eliminarContacto(contacto.id)]}><i class="fa-solid fa-trash"></i></button>
                        </div>

                    </div>)
            })}


        </div>

    )
}

export default ListaContactos