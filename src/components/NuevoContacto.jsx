import { useRef } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'



const NuevoContacto = () => {
    const imputNombre = useRef(null)
    const imputEmail = useRef(null)
    const imputTelefono = useRef(null)
    const imputDireccion = useRef(null)
    const navigate = useNavigate();
    function volverALista() {
        navigate("/")
        
    }

    async function guardarContacto(evento) {
        evento.preventDefault()
        let textoNombre = imputNombre.current.value
        let textoEmail = imputEmail.current.value
        let textoTelefono = imputTelefono.current.value
        let textoDireccion = imputDireccion.current.value
        console.log(textoNombre)
        console.log(textoEmail)
        console.log(textoTelefono)
        console.log(textoDireccion)
        try {
            const request = await fetch("https://playground.4geeks.com/contact/agendas/mile/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: textoNombre,
                    phone: textoTelefono,
                    email: textoEmail,
                    address: textoDireccion
                })
            })
            const data = await request.json()
            console.log(data)
            navigate("/")
        } catch (error) {
            console.error("errorCreandoNuevoUsuario")
            console.error(error)
        }
    }
    return (
        <div className="contenedor-nuevo" >
            <h1 className="titulo1">Formulario Nuevo Contacto</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputNombre" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="emailHelp"
                        ref={imputNombre}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail"
                        ref={imputEmail} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        ref={imputTelefono} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputdireccion" className="form-label">Direccion </label>
                    <input type="text" className="form-control" id="exampleInputdireccion"
                        ref={imputDireccion} />
                </div>
                <button type="submit" onClick={(e) => guardarContacto(e)} className="botonGuardar btn btn-primary">Guardar</button>
                <div className="volverContacto"onClick={()=> volverALista ()
                } > Volver a contactos</div>
            </form>
        </div>
    )

}
export default NuevoContacto