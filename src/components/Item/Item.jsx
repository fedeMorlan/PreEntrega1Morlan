import React from 'react';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({item}) => {
    const {darkMode} = useDarkModeContext()

    return (
        <div className={`card mb-3 cardProducto ${darkMode ? 'text-white bg-dark' : ''}`} style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top cardImg" alt={`Imagen de ${item.nombre}`} />
            <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                {/* como cada item conoce su id, puede generarse dinamicamente el routing*/}
                <button className="btn btn-primary"><Link className='nav-link' to={`/item/${item.id}`}>VER DETALLE</Link></button>
            </div>
        </div>
    );
}

export default Item;
