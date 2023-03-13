import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail  from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../firebase/firebase';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ([])
    const {id} = useParams()
    useEffect(() => {
        // para consultar si los datos estan en el json
        // fetch('../json/productos.json')
        // .then(response => response.json())
        // .then(products => {
        //     const item = products.find(prod => prod.id  === parseInt(id))
        //     setProducto(item)

        getProducto(id)
        // no hace falta el parse de arriba porque ya esta en string en firebase
        .then(item => {
            setProducto(item)
        })
    }, [])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
