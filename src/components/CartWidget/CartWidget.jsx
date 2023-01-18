import React from 'react';
// vamos a recibir cuantos elementos tiene el carro por parametro
const CartWidget = ({cantCarrito}) => {
    return (
        // Fragment, es una etiqueta vacia (<>) que no genera un elemento HTML
        // se usa porque react debe retornar un solo elemento
        <>
            <div className='cant-container'>
                <p className='cantidad-carro'>{cantCarrito}</p>
                <button className='btn btn-dark btn-carrito'>Carrito</button>
            </div>
        </>
    );
}

export default CartWidget;
