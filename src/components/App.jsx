import './App.css';
// import Dolar from './Dolar/dolar';
// import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
// routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Contacto/Contacto';
// context
import { CarritoProvider } from '../context/CarritoContext';
// queda pendiente que si hay pocos productos, queda un espacio abajo que no es dark
import { DarkModeProvider } from '../context/DarkModeContext';
// estilo de toastify para dar un msj
import 'react-toastify/dist/ReactToastify.css';
// se trata como un componente, lo puedo incluir donde yo quiera, no dentro de Routes
import { ToastContainer } from 'react-toastify';
// Firebase
import { cargarBDD, updateProducto, deleteProducto } from '../firebase/firebase';

function App() {
  // esta linea la ejecutamos una sola vez y luego comentamos, sino se cargaria la BDD cada vez que hacemos start
  // si tenemos en index.js en React.StrictMode hace que se ejecute 2 veces. Para ejecutar esto comentamos el strict mode
  // cargarBDD()
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <CarritoProvider> 
            <Navbar/>
            <h2 className='bienvenida text-center'>
              Distor Knob!
            </h2>
            <p className='bienvenida-2 text-center'>
                Tu tienda digital musical
            </p>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              {/* este path va a ir cambiando, para ello se ponen los :, significa que va a cambiar */}
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
            <ToastContainer/>
          </CarritoProvider>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
