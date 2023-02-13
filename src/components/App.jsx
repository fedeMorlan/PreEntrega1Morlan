import './App.css';
// import Dolar from './Dolar/dolar';
// import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
// routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Contacto/Contacto';

// estilo de toastify para dar un msj
import 'react-toastify/dist/ReactToastify.css';
// se trata como un componente, lo puedo incluir donde yo quiera, no dentro de Routes
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
