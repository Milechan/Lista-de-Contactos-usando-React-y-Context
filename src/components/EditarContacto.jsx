import { useRef } from "react"
import { useNavigate } from "react-router"

const EditarContacto = () => {
    const imputNombre = useRef(null)
    const imputEmail = useRef(null)
    const imputTelefono = useRef(null)
    const imputDireccion = useRef(null)
    const navigate = useNavigate();
    async function obtenerContacto(id) {
        try {
            const request= await fetch("")
        } catch (error) {
            console.error("no se pudo obtener contacto con el id"+ id )
            console.error(error)
        }
        
    }
    return (
        <div className="contenedor-nuevo" >
            <h1 className="titulo1">Formulario Editar Contacto</h1>
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
                <div className="volverContacto" onClick={() => volverALista()
                } > Volver a contactos</div>
            </form>
        </div>
    )
}
export default EditarContacto 