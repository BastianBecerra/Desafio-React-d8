import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home'
import Navegacion from './componentes/Navegacion';
import CardComponentes from './componentes/CardPizza';
import Pizza from './componentes/Pizza';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <CardComponentes/>
        <Routes>
          <Route patch='/' element={<Home />}/>
          <Route patch='/pizza/:id' element={<Pizza/>} />
          <Route patch='/carrito' element={<h1>carrito</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
