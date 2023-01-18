import React from 'react';

const ItemListContainer = ({msj}) => {
    return (
        <>
            <h2 className='bienvenida'>
                {msj} 
            </h2>
            <p className='bienvenida-2'>
                Tu tienda digital musical
            </p>
        </>
    );
}

export default ItemListContainer;
