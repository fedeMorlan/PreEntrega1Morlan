import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    //agregar producto
    // es distinto agregar un producto que no estaba en el carrito que
    // agregar un producto que ya estaba (este se sumaria)
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) { // reemplazo cantidad
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            // no puedo modificar directo
            const aux = [...carrito]
            aux[indice].cant += cantidad
            setCarrito(aux)
        } else { // creo el objeto en el carro con los datos y cantidad
            const prodCart = {
                ...producto,
                cant: cantidad
            }

            setCarrito([...carrito, prodCart])
        }
    }

    //eliminar producto
    const removeItem = (id) => {
        // no usamos delete porque es muy destructivo (?), 
        // no "puedo" modificar el carrito directamente
        // delete carrito[index]
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //precio total de la compra (precio * cantidad)
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }

    //cantidad total de productos en carrito
    // hay 2 formas, o cuento de a 1 item, o cuento por productos diferentes
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //si existe productos en el carrito
    const isInCart = (id) => {
        // si no existe, retorna undefined
        return carrito.find(prod => prod.id === id)
    }

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, totalPrice, emptyCart, getItemQuantity}}>
            {props.children}
        </CarritoContext.Provider>
    )
} 