import React from 'react';
import { useNavigate } from 'react-router-dom';
// para dar un mensaje en el componente ToastContainer
import { toast } from 'react-toastify';
// puedo indagar sweet alert como variacion

const Contacto = () => {
    // ver react hook form cuando quiera hacer la validacion
    // se puede hacer con validacion html tambien

    const datosFormulario = React.useRef()

    // ubicacion actual de mi componente
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        // porque por defecto se refresca la pagina y envia datos
        e.preventDefault()
        // genero un objeto iterador de los datos del formulario
        const datForm = new FormData(datosFormulario.current)
        // para iterar, recibo como parametro un iterator, y devuelve un objeto
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)

        // resetar form
        e.target.reset()
        // dar mensaje
        toast.success("Gracias por tu mensaje! Será respondido a la brevedad")
        // redirigir
        navigate("/")
    }

    return (
        <div className='container'>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name='nombre' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="textareaj" className="form-label">Mensaje</label>
                    <textarea className="form-control" name='textarea' rows={3} defaultValue={''}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contacto;
