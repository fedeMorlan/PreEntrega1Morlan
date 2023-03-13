// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    // variable que contiene la key en vercel
  apiKey: process.env.API_KEY,
  authDomain: "react-coderhouse-563eb.firebaseapp.com",
  projectId: "react-coderhouse-563eb",
  storageBucket: "react-coderhouse-563eb.appspot.com",
  messagingSenderId: "1085717950373",
  appId: "1:1085717950373:web:64eb63721188db6400024c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

/*
CREATE
READ
UPDATE
DELETE
*/
// funcion asincronica!
export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    // array de productos
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        // consulta a BD: SIEMPRE ASYNC
        // a que bd consulto, nombre de la coleccion. si existe la consulta, sino la crea!
        await addDoc(collection(db, "productos"), {
            // falta el id! en la bd se autogenera
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            precio: prod.precio,
            img: prod.img,
            idCategoria: prod.idCategoria,
            stock: prod.stock
        })
    })

}

export const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        // retorna cada uno de los datos de mi productos, por como esta guardado
        // tiene los datos por un lado y el id por otro
        return {...prod.data(), id: prod.id}
    })
    return items
}

// buscar un producto para mostrarlo en itemDetailContainer
export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    // conversion de datos por como estan en firebase!
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db," productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos", id))
}

// crear orden de compra
export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
    // guardar todos los elementos mas precio mas cliente
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

// consultar ordenCompra
export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    // conversion de datos por como estan en firebase!
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}
