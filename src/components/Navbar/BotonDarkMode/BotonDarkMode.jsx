import React from 'react';
import './botonDarkMode.css'
// context
import { useDarkModeContext } from '../../../context/DarkModeContext';

const BotonDarkMode = () => {
const {toggleDarkMode} = useDarkModeContext()

    return (
        <div className='theme-switch-wrapper'>
            <label className='theme-switch' htmlFor="checkbox">
                <input type="checkbox" id='checkbox' onInput={() => toggleDarkMode()}/>
                <div className='slider round'/>
            </label>
        </div>
    );
}

export default BotonDarkMode;
