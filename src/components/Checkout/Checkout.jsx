import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';

// estilo para validacion
import "./checkout.css"

const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    // armo los datos que necesito enviar desde el form
    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        // validacion de repetir email
        const email1 = cliente.email
        const email2 = cliente.repetiremail

        if (email1 !== email2) { 
            e.preventDefault()
            toast.error("El email de verificacion no coincide con el email ingresado arriba")
            }

        else{ 
            // copio el carrito, aunque deberia enviar solo el id de cada item para no repetir info
            const aux =[...carrito]

            // para descontar el stock tengo que afectar la base de datos
            // para hacer: todavia puedo agregar al carro mas de lo que hay disponible (de a 5 por ejemplo)
            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(prodBDD => {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice, new Date().toISOString()).then(ordenCompra => {
                toast.success(`Gracias por comprar en Distor Knob!, tu orden de compra ${ordenCompra.id} por un total de ${new Intl.NumberFormat('de-DE').format(totalPrice())} se realizó correctamente`)
                emptyCart()
                e.target.reset()
                navigate("/")
                
            })
        }
    }
    return (
        <>
            {/* no se visualiza el boton de finalizar compra, pero la url existe asique por las dudas */}
            {carrito.length === 0 ?
            <><h2>Carrito vacío</h2>
            <Link className='nav-link' to={'/'}><button className='btn btn-dark'>Continuar comprando</button></Link></>
            :

            <div className='container'>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido<abbr title="Campo obligatorio" aria-label="required">*</abbr></label>
                        <input type="text" className="form-control" name='nombre' pattern='[A-z0-9À-ž\s]{2,}' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email<abbr title="Campo obligatorio" aria-label="required">*</abbr></label>
                        <input type="email" className="form-control" name='email' required/>
                    </div>
                    {/* implementar repetir email como verificacion*/}
                    <div className="mb-3">
                        <label htmlFor="repetiremail" className="form-label">Repetir Email<abbr title="Campo obligatorio" aria-label="required">*</abbr></label>
                        <input type="email" className="form-control" name='repetiremail' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cel" className="form-label">Teléfono (incl. codigo de area)<abbr title="Campo obligatorio" aria-label="required">*</abbr></label>
                        <input type="text" className="form-control" name='cel' pattern='\d{10,11}' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dir" className="form-label">Dirección (calle y numero)<abbr title="Campo obligatorio" aria-label="required">*</abbr></label>
                        <input type="text" className="form-control" name='dir' pattern="(?=.*\d)(?=.*[a-zA-Z])[^'\x22]+.{3,}" required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </form>
            </div>
            }
        </>
    );
}

export default Checkout;
