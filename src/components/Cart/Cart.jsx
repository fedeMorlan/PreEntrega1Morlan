import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';
const Cart = () => {
    // no puedo agregar el remove item aca porque hice una plantilla en itemCount
    const {carrito, totalPrice, emptyCart, } = useCarritoContext()
    return (
        <>
        { carrito.length === 0 
            ?
            // vacio
            <>
                <h2>Carrito vacío</h2>
                <Link className='nav-link' to={'/'}><button className='btn btn-dark'>Continuar comprando</button></Link>
            </>
            :
            // no vacio
            <div className='container cartContainer'>
                {
                    <ItemList products={carrito} plantilla={'itemCart'}/>
                }
                <div className='divButton'>
                    <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                    <button className='btn btn-danger' onClick={() => emptyCart()} >Vaciar carrito</button>
                    <Link to={'/'}><button className='btn btn-dark'>Continuar comprando</button></Link>
                    <Link to={'/checkout'}><button className='btn btn-dark'>Finalizar compra</button></Link>
                </div>
            </div>
            
        }
        </>
    )
   
}

export default Cart;
