import { Routes, Route, Link } from 'react-router-dom'

import Civilizaciones from './components/Civilizaciones'
import Civilizacion from './components/Civilizacion'

function App() {
  return (
    <div className="container">
       <div className="btn-group mt-2">
          <Link to="/" className="btn btn-dark">Inicio</Link>
          <Link to="/civilizaciones" className="btn btn-dark">Civilizaciones</Link>
        </div>
      <Routes>
        <Route path='/civilizaciones' element={ <Civilizaciones /> } exact/>
        <Route path='/civilizacion/:id' element={ <Civilizacion /> } exact/>
      </Routes>
    </div>
  );
}

export default App;
