import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
// para consultar si me pasaron una categoria como parametro
import { useParams } from 'react-router-dom';

// voy a definir si estoy en una vista de categoria o en inicio en base al parametro que me pasan
const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    // tengo q respetar el nombre de la ruta de app.jsx
    const {idCategoria} = useParams()
    useEffect(() => {
        // si existe la Categoria, doy una vista de categoria
        if(idCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(produ => {
                // uso parseInt porque en el json esta como int, pero se requiere un string
                const products = produ.filter(prod => prod.idCategoria === idCategoria)
                // tengo que llamar exactamente igual al parametro que como esta en el componente o da error?
                const productsList = ItemList({products})
                
                setProductos(productsList)
            })
        }
        else {
            // si no existe, tiro la lista entera de items
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                
                setProductos(productsList)
            })
        }
        //[] cuando se renderiza por primera vez!
        //[prop] cuando se renderiza y cuando se actualiza
    }, [idCategoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
