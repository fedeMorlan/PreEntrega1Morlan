import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"} aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
        </>
    );
}

export default Secciones;
