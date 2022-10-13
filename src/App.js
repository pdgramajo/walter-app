import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import LoginRef from './routes/Login/LoginRef';
import UbicationCreation from './routes/Ubication/UbicationCreation';
import UbicationDisplay from './routes/Ubication/UbicationDisplay';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginRef />} />
          <Route path='ubication/:id' element={<UbicationDisplay />} />
          <Route path='ubication/create' element={<UbicationCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
