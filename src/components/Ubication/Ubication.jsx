import { FaTrashAlt,FaExpandArrowsAlt,FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import "./Ubication.css";
import { UbicationContext } from "../../context/UbicationContext";

const Ubication = ({ ubication }) => {
  const { id, cityName, latitud, longitud, temperature, windSpeed } = ubication;
  const { ubications, setUbications } = useContext(UbicationContext);

  const handleDelete = () => {
    const ubicationsFiltered = ubications.filter(
      (ubication) => ubication.id !== id
    );
    setUbications(ubicationsFiltered);
  };

  return (
    <div className="ubication-container" key={id}>
      <div className="ubication">
        <h3>{cityName}</h3>
        <li>lat: {latitud}</li>
        <li>lon:{longitud}</li>
        <li>Temperatura :{temperature} C°</li>
        <li>Velocidad del viento : {windSpeed} km/h</li>
      </div>
      <div className="ubication-actions">
        <div className="fav" onClick={handleDelete}>
          <FaTrashAlt />
        </div>
        <Link className='fav' to={`/ubication/${id}/edit`}>
            <FaExpandArrowsAlt />
        </Link>
        <Link className='fav' to={`/ubication/${id}`}>
            <FaExpandArrowsAlt />
        </Link>
      </div>
    </div>
  );
};

export default Ubication;
