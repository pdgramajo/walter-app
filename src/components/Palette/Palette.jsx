import { FaTrash,FaEdit } from 'react-icons/fa';
import { useContext } from "react";
import "./Palette.css";
import { ColorPalettesContext } from "../../context/ColorPalettesContext";

const Palette = ({ palette }) => {
  const { id, name, latitud, longitud, temperature, windSpeed } = palette;
  const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext);

  const handleDelete = () => {
    const palettesFiltered = colorPalettes.filter(
      (palette) => palette.id !== id
    );
    setColorPalettes(palettesFiltered);
  };

  return (
    <div className="palette-container" key={id}>
      <div className="palette">
        <h3>city: {name}</h3>
        <li>lat: {latitud}</li>
        <li>lon:{longitud}</li>
        <li>Temperatura :{temperature} C°</li>
        <li>Velocidad del viento : {windSpeed} km</li>
      </div>
      <div className='palette-actions'>
        <div className='fav' onClick={handleDelete}>
            <FaTrash className='heart'/>
        </div> 
        <div className='fav' onClick={handleDelete}>
            <FaEdit className='heart'/>
        </div>

      </div>
    </div>
  );
};

export default Palette;
