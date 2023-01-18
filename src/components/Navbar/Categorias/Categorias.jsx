import React from 'react';

const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Amplificadores</a></li>
                    <li><a className="dropdown-item" href="#">Bajos</a></li>
                    <li><a className="dropdown-item" href="#">Baterías y percusión</a></li>
                    <li><a className="dropdown-item" href="#">Consolas</a></li>
                    <li><a className="dropdown-item" href="#">Guitarras</a></li>
                    <li><a className="dropdown-item" href="#">Instrumentos de viento</a></li>
                    <li><a className="dropdown-item" href="#">Teclados</a></li>
                    <li><a className="dropdown-item" href="#">Pedales</a></li>
                    {/* podria no hacer falta */}
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Accesorios</a></li>
                    <li><a className="dropdown-item" href="#">Cuerdas</a></li>
                </ul>
            </li> 
    );
}

export default Categorias;
