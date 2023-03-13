// componente de referencia cuando aprendimos hooks, useState

import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify'

const ItemCount = ({valInicial, stock, onAdd}) => {
    // como es constante, modificamos el mismo usando una funcion
    const [contador, setContador] = useState(valInicial)
            //VAR       modificar var       estado inicial
    
    // operador ternario sin else, usar un shortcircuit and
    const sumar = () => {(contador < stock) && setContador(contador + 1)}
    const restar = () => {(contador > valInicial) && setContador(contador - 1)}
    let plural
    (contador > 1) ? plural ="s" : plural=""
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success(`${contador} Producto${plural} agregado${plural} al carrito!`)
    }
    return (
        <>
            {/* inline event porque no uso propiedades ni metodos de DOM */}
            <button className='btn btn-dark contador' onClick={sumar}>+</button> 
            {contador}
            <button className='btn btn-dark contador' onClick={restar}>-</button>
            <button className='btn btn-secondary agregarCarrito' onClick={() => agregarCarrito()}>Agregar a Carrito</button>
        </>
    );
}

export default ItemCount;
