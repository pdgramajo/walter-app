import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../../services/service";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationCreation.css";
import UbicationForm from "../../components/Ubication/UbicationForm";

const UbicationCreation = () => {
  const { ubications, setUbications } = useContext(UbicationContext);
  const navigate = useNavigate();
  const defaultValues = {
    cityName: "tilcara", // ""
    longitud: "-23.5791908", // ""
    latitud: "-65.404902", // ""
  };

  const getCurrentHour = () => {
    var currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour;
  };

  const createUbication = async ({ cityName, latitud, longitud }) => {
    const weatherData = await getWeather(latitud, longitud);

    if (weatherData.error) {
      alert(weatherData.reason); // aqui pintar el error en la pantalla
    }

    const { hourly } = weatherData;

    const currentHour = getCurrentHour();

    const ubicationNew = {
      id: ubications.length + 1,
      cityName: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: hourly.temperature_2m[currentHour - 1],
      windSpeed: hourly.windspeed_10m[currentHour - 1],
    };
    setUbications([...ubications, ubicationNew]);
    navigate("/home");
  };

  return (
    <UbicationForm
      initialValue={defaultValues}
      title="Crea una nueva ubicación"
      btnLabel="Crear Ubicación"
      submit={createUbication}
    />
  );
};

export default UbicationCreation;
