import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { Context } from "../store/AppContext"

const EditarContacto = () => {
    const { store } = useContext(Context)
    const imputNombre = useRef(null)
    const imputEmail = useRef(null)
    const imputTelefono = useRef(null)
    const imputDireccion = useRef(null)
    const navigate = useNavigate();
  
    function volverALista(){
        navigate('/')
    }
    async function editarContacto(evento) {
        try {
            evento.preventDefault()
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile/contacts/" + store.contacto.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: imputNombre.current.value,
                    email: imputEmail.current.value,
                    phone: imputTelefono.current.value,
                    address: imputDireccion.current.value
                })
            })
            const data = await request.json()
            // alert(data)
            console.log(data);
            navigate('/')
        } catch (error) {
            console.error('no se pudo editar el contacto');
            console.error(error);
        }
    }
    useEffect(() => {
        console.log(store.contacto);
        imputNombre.current.value = store.contacto.name
        imputEmail.current.value = store.contacto.email
        imputTelefono.current.value = store.contacto.phone
        imputDireccion.current.value = store.contacto.address
    }, [])
    return (
        <div className="contenedor-nuevo" >
            <h1 className="titulo1">Formulario Editar Contacto</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputNombre" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                        ref={imputNombre}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail"
                        ref={imputEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        ref={imputTelefono} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputdireccion" className="form-label">Direccion </label>
                    <input type="text" className="form-control" id="exampleInputdireccion"
                        ref={imputDireccion} />
                </div>
                <button type="submit" onClick={(e) => editarContacto(e)} className="botonGuardar btn btn-primary">Guardar</button>
                <div className="volverContacto" onClick={() => volverALista()
                } > Volver a contactos</div>
            </form>
        </div>
    )
}
export default EditarContacto 