import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';
const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    // armo los datos que necesito enviar desde el form
    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        // copio el carrito, aunque deberia enviar solo el id de cada item para no repetir info
        const aux =[...carrito]

        // para descontar el stock tengo que afectar la base de datos
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
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name='nombre' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email'/>
                    </div>
                    {/* implementar repetir email como verificacion*/}
                    <div className="mb-3">
                        <label htmlFor="repetiremail" className="form-label">Repetir Email</label>
                        <input type="email" className="form-control" name='repetiremail'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cel" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" name='cel'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dir" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name='dir'/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                </form>
            </div>
            }
        </>
    );
}

export default Checkout;
