import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../../service";
import { UbicacionContext } from "../../context/UbicacionContext";
import "./UbicacionCreation.css";

const UbicacionCreation = () => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cityName: "",
      longitud: "", 
      latitud: "" 
    },
  });

  const getCurrentHour = () => {
    var currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour;
  };

  const createUbicacion = async ({ cityName, latitud, longitud }) => {

    const weatherData = await getWeather(latitud, longitud);
    console.log('createUbicacion | weatherData', weatherData);

    if(weatherData.error){
      alert(weatherData.reason) // aqui pintar el error en la pantalla
    }

    const { hourly } = weatherData;

    const currentHour = getCurrentHour()

    const ubicacionNew =  {
      id: ubicaciones.length + 1,
      name: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: hourly.temperature_2m[currentHour - 1],
      windSpeed: hourly.windspeed_10m[currentHour - 1],
    };
    setUbicaciones([...ubicaciones, ubicacionNew]);
    navigate("/");
  };

  return (
    <div className="ubicacion-new-container">
      <h2>Crea una nueva ubicación</h2>
      <form className="ubicacion-form" onSubmit={handleSubmit(createUbicacion)}>
        <input
          className="input-ubicacion-name-form"
          type="text"
          placeholder="Nombre de la ciudad"
          {...register("cityName", {
            required: "Debe ingresar un nombre de ciudad",
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className="input-ubicacion-name-form"
          type="text"
          placeholder="Ingrese latitud"
          {...register("latitud", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className="input-ubicacion-name-form"
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

export default UbicacionCreation;