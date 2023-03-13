import React from 'react';
// vamos a recibir cuantos elementos tiene el carro por parametro
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        // Fragment, es una etiqueta vacia (<>) que no genera un elemento HTML
        // se usa porque react debe retornar un solo elemento
        <>
            <div className='cant-container'>
            {getItemQuantity() > 0 && <span className='cantidad-carro'>{getItemQuantity()}</span>}
                <Link className='nav-link' to={'/cart'}>
                    <button className='btn btn-dark btn-carrito'>Carrito</button>
                </Link>
                
            </div>
        </>
    );
}

export default CartWidget;
