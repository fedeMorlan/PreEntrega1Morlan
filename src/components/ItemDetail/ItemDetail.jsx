import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
 
const ItemDetail = ({item}) => {
    // el profe dijo que lo iba a modificar para que ande pero no lo subio
    const {darkMode} = useDarkModeContext()
    // se usa con ${darkMode && 'itemDetailBodyDark'}

    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item,cantidad)
    }

    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded" alt={`Imagen de ${item.nombre}`} />            
            </div>
            <div className="col-md-8">
                <div className={`card-body`}>
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>{item.descripcion}</p>
                    <p className='card-text'></p>
                    <p className='card-text'>Stock disponible: {item.stock}</p>
                    <div className='agregarCarro'>       
                        {/* envie una funcion como propiedad                  */}
                        <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                        <Link className='nav-link' to={"/cart"}><button className='btn btn-secondary agregarCarrito'>Finalizar compra</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
