import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../../services/service";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationCreation.css";

const UbicationCreation = () => {
  const { ubications, setUbications } = useContext(UbicationContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cityName: "", // ""
      longitud: "", // ""
      latitud: "", // ""
    },
  });

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
      name: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: hourly.temperature_2m[currentHour - 1],
      windSpeed: hourly.windspeed_10m[currentHour - 1],
    };
    setUbications([...ubications, ubicationNew]);
    navigate("/");
  };

  return (
    <div className="ubication-new-container">
      <span>Crea una nueva ubicación</span>
      <form className="ubication-form" onSubmit={handleSubmit(createUbication)}>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Nombre de la ciudad"
          {...register("cityName", {
            required: "Debe ingresar un nombre de ciudad",
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Ingrese latitud"
          {...register("latitud", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Ingrese longitud"
          {...register("longitud", {
            required: "Debe ingresar longitud",
          })}
        />
        <p>{errors.longitud?.message}</p>

        <button className="btn-form" type="submit">
          Crear Ubicación
        </button>
      </form>
    </div>
  );
};

export default UbicationCreation;
