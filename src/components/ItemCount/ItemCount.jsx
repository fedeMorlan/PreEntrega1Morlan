// componente de referencia cuando aprendimos hooks, useState

import React from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify'
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCount = ({valInicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()
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
            <div className='contador-txt'>
                <button className={`btn contador ${darkMode ? 'btn-light' : 'btn-dark'}`} onClick={sumar}>+</button> 
                {contador}
                <button className={`btn contador ${darkMode ? 'btn-light' : 'btn-dark'}`} onClick={restar}>-</button>
                <button className='btn btn-secondary agregarCarrito' onClick={() => agregarCarrito()}>Agregar a Carrito</button>
            </div>
        </>
    );
}

export default ItemCount;
