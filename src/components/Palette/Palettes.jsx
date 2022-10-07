import Palette from "./Palette";
import './Palettes.css'

const Palettes = ({ palettes }) => {// ubicaciones
  return (
    <div className='grid'>
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} /> // ubicacion
      ))}
    </div>
  );
}

export default Palettes