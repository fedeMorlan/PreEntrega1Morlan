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
                {/* veo un problema en la logica que nos hicieron implementar: 
                solo se descuenta cuando se finaliza la compra.
                esto quiere decir que puede ocurrir el siguiente problema:
                tengo stock total de 20 unidades de un producto. Selecciono el producto
                y agrego 10 unidades al carro. No finalizo la compra porque decido que me falto agregar. 
                Vuelvo y agrego 15 unidades de ese producto al carro. 
                En total agregue 25 unidades, cuando tenia un total de 20 :/ */}
            {getItemQuantity() > 0 && <span className='cantidad-carro'>{getItemQuantity()}</span>}
                <Link className='nav-link' to={'/cart'}>
                    <button className='btn btn-dark btn-carrito'>Carrito</button>
                </Link>
                
            </div>
        </>
    );
}

export default CartWidget;
