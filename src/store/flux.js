export default function getState({ getStore, getActions, setStore }) {
    return {
        store: {
            contacto: {
                name: "", address: "", phone: "", email: "", id: ""
            }
        },
        actions: {
            editarContacto: (con) => {
                console.log('editarcontacto : ',con);
                
                const store = getStore()
                setStore({
                    ...store,
                    contacto: {
                        name: con.name,
                        address: con.address,
                        phone: con.phone,
                        email: con.email,
                        id:con.id
                    }
                })
            }
        }
    }
}