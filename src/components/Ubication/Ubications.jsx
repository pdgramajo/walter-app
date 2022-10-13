import Ubication from "./Ubication";
import './Ubications.css'

const Ubications = ({ ubications }) => {// ubicaciones
  return (
    <div className='grid'>
      {ubications.map((ubication) => (
        <Ubication key={ubication.id} ubication={ubication} /> // ubicacion
      ))}
    </div>
  );
}

export default Ubications