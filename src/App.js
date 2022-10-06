import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import PaletteDisplay from './routes/Palette/PaletteDisplay';
import { useContext, useEffect } from 'react';
import { getColorPalettes, getUbication } from './service';
import { ColorPalettesContext } from './context/ColorPalettesContext'
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LoginRef from './routes/Login/LoginRef';
import LoginControlled from './routes/Login/LoginControlled';
import PaletteCreation from './routes/Palette/PaletteCreation';

function App() {

  const { setColorPalettes } = useContext(ColorPalettesContext)

  useEffect(() => {
    /* getColorPalettes()
      .then((data) => {
        console.log("Data obtenido: ", data);
        setColorPalettes(data);
      })
      .catch((err) => console.log(err)); */
    getUbication()
      .then((data) => {
        console.log("Data obtenido: ", data);
        //setColorPalettes(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginRef />} />
          <Route path='palette/:id' element={<PaletteDisplay />} />
          <Route path='ubication/create' element={<PaletteCreation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
