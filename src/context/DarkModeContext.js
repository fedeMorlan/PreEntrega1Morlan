// usarlo, crearlo, estado interno de esta funcion
import { useContext, createContext, useState } from "react";

/* nota! react comienza en un div (id=root) dentro del body.
El problema es que el darkmode no alcanzaria lo que esta fuera de ese div, 
tenemos que acaparar todo el body.
Ver linea 20
*/

// crear mi contexto (normalmente se usa en mayuscula)
const DarkModeContext = createContext()
// para que no tenga que importar useContext cada vez que quiera importar DarkModeContext
// si o si tiene que ser una funcion
export const useDarkModeContext = () => useContext(DarkModeContext)

// defino el proveedor del contexto. Defino que componentes pueden conocer este valor
// las props se usen o no son obligatorias para context
export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)

    // defino la accion que hace el boton que cambia el valor
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)

        // usamos la negacion por como esta hecho el elemento en css
        if (!darkMode) {
            // agregar estilo al primer elemento, que no esta en react
            // si no hago el nextSibling, selecciona el elemento <noscript>
            document.body.firstElementChild.nextElementSibling.classList.add('darkMode')
        }
        else {
            document.body.firstElementChild.nextElementSibling.classList.remove('darkMode')
        }
    }

    return (
        // dentro de value defino lo que se va a usar de mi contexto
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {/* en algun momento puedo recibir propiedades, entonces las tengo que agarrar (obligatorio) */}
            {props.children}
        </DarkModeContext.Provider>
    )
}