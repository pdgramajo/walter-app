import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import LoginRef from './routes/Login/LoginRef';

import PaletteCreation from './routes/Palette/PaletteCreation';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginRef />} />
          <Route path='ubication/create' element={<PaletteCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
