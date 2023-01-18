import React from 'react';
// vamos a recibir cuantos elementos tiene el carro por parametro
const CartWidget = ({cantCarrito}) => {
    return (
        // Fragment, es una etiqueta vacia (<>) que no genera un elemento HTML
        // se usa porque react debe retornar un solo elemento
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
