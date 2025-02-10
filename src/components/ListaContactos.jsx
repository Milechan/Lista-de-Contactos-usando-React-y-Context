import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import "../App.css"
import EditarContacto from "./EditarContacto"

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
    function editarContacto(id) {
        navigate("/EditarContacto/"+id)
        
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
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile/contacts/" + id, {
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
        <div className="contenedorLista">

            <button className="botonNuevo btn btn-success " onClick={() => irANuevoContacto()}>Nuevo Contacto </button>
            {
                contactos.length > 0 ?
                    contactos.map((contacto) => {
                        return (
                            <div className="contenedorContacto">
                                <div className="fotoContacto"><img className="foto" src="https://pbs.twimg.com/media/GhxGBqxWIAAE8XZ.jpg:large" alt="imagen Contacto" /></div>
                                <div className='infoContacto'  >
                                    <div className="nombreDeContacto">{contacto.name}</div>
                                    <div><i className="fa-solid fa-location-dot"></i>  {contacto.address}</div>
                                    <div><i className="fa-solid fa-phone"></i>  {contacto.phone}</div>
                                    <div><i className="fa-solid fa-envelope"></i>  {contacto.email}</div>
                                </div>
                                <div className="botonesContacto">
                                    <button className="btn btn-warning editar" onClick={()=>{editarContacto(contacto.id)}}><i className="fa-solid fa-pencil"></i></button>
                                   
                                   
                                    <button type="button" className="btn btn-danger eliminar" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fa-solid fa-trash"></i>
                                    </button>

                                    
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Estas seguro?</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Estas consciente que este contacto sera borrado de la lista.
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => [eliminarContacto(contacto.id)]}>si,eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                    })
                    : 'No tienes contactos guardados.'
            }


        </div>

    )
}

export default ListaContactos