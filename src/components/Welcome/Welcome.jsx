import React from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Welcome = () => {
    const {darkMode} = useDarkModeContext()

    return (
        <>
            {/* componente exclusivamente para aplicar darkmode al titulo*/}
            <h2 className={`bienvenida text-center ${darkMode ? 'text-white' : ''}`}>
              Distor Knob!
            </h2>
            <p className='bienvenida-2 text-center'>
                Tu tienda digital musical
            </p>
        </>
    );
}

export default Welcome;
