import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </a>
                <ul className="dropdown-menu">
                    {/* no entiendo por que entre llaves el to */}
                    <li><Link className="dropdown-item" to={"/category/amplificadores"}>Amplificadores</Link></li>
                    <li><Link className="dropdown-item" to={"/category/bajos"}>Bajos</Link></li>
                    <li><Link className="dropdown-item" to={"/category/guitarras"}>Guitarras</Link></li>
                    <li><Link className="dropdown-item" to={"/category/teclados"}>Teclados</Link></li>
                    {/* podria no hacer falta */}
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/accesorios"}>Accesorios</Link></li>
                    <li><Link className="dropdown-item" to={"/category/cuerdas"}>Cuerdas</Link></li>
                </ul>
            </li> 
    );
}

export default Categorias;
