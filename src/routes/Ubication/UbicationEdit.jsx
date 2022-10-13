import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../../services/service";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationCreation.css";
import UbicationForm from "../../components/Ubication/UbicationForm";

const UbicationEdit = () => {
  const { id } = useParams();
  const { ubications, setUbications } = useContext(UbicationContext);
  const [currentUbication, setCurrentUbication] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const ubication = ubications.filter((u) => {
      return u.id === Number(id);
    });
 
    const data = {
        cityName: ubication[0]?.cityName,
        longitud: ubication[0]?.longitud,
        latitud: ubication[0]?.latitud,
      }
    setCurrentUbication(data);
  }, []);

  const getCurrentHour = () => {
    var currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour;
  };

  const handleEdit = async ({ cityName, latitud, longitud }) => {
    const weatherData = await getWeather(latitud, longitud);

    if (weatherData.error) {
      alert(weatherData.reason); // aqui pintar el error en la pantalla
    }

    const { hourly } = weatherData;

    const currentHour = getCurrentHour();

    const ubicationsFiltered = ubications.filter(
      (ubication) => ubication.id !== Number(id)
    );
    console.log('handleEdit | ubicationsFiltered', ubicationsFiltered);

    const ubicationEdited = {
      id: id,
      cityName: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: hourly.temperature_2m[currentHour - 1],
      windSpeed: hourly.windspeed_10m[currentHour - 1],
    };
    console.log('handleEdit | ubicationEdited', ubicationEdited);

    setUbications([...ubicationsFiltered, ubicationEdited]);

    navigate("/home");
  };

  return (
    <UbicationForm
      initialValue={currentUbication}
      title="editar una nueva ubicación"
      btnLabel="editar Ubicación"
      submit={handleEdit}
    />
  );
};

export default UbicationEdit;
