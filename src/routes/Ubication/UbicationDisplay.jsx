import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationDisplay.css";

const UbicationDisplay = () => {
  const { id } = useParams();
  const { ubications } = useContext(UbicationContext);
  const [ubication] = ubications.filter(
    (ubication) => ubication.id === Number(id)
  );

  return (
    <div className="ubication-display-container">
      <div className="ubication-display-card">
        <h1 className="ubication-display-name">{ubication.name}</h1>
        <li>lat: {ubication.latitud}</li>
        <li>lon:{ubication.longitud}</li>
        <li>Temperatura :{ubication.temperature} C°</li>
        <li>Velocidad del viento : {ubication.windSpeed} km/h</li>
        <Link className="btn-back" to="/">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default UbicationDisplay;
