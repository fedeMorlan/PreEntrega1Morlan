// componente de referencia cuando aprendimos hooks, useState

import React from 'react';
import { useState } from 'react';

const ItemCount = ({valInicial, stock}) => {
    // como es constante, modificamos el mismo usando una funcion
    const [contador, setContador] = useState(valInicial)
            //VAR       modificar var       estado inicial
    
    // operador ternario sin else, usar un shortcircuit and
    const sumar = () => {(contador < stock) && setContador(contador + 1)}
    const restar = () => {(contador > valInicial) && setContador(contador - 1)}
    return (
        <>
            {/* inline event porque no uso propiedades ni metodos de DOM */}
            <button className='btn btn-dark' onClick={sumar}>+</button> 
            {contador}
            <button className='btn btn-dark' onClick={restar}>-</button>
        </>
    );
}

export default ItemCount;
