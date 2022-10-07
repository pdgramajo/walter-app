import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../../service";
import { ColorPalettesContext } from "../../context/ColorPalettesContext";
import "./PaletteCreation.css";

const PaletteCreation = () => {
  const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cityName: "tilcara",// ""
      longitud: "-23.5791908", // ""
      latitud: "-65.404902" // ""
    },
  });

  const getCurrentHour = () => {
    var currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour;
  };

  const createPalette = async ({ cityName, latitud, longitud }) => {

    const weatherData = await getWeather(latitud, longitud);
    console.log('createPalette | weatherData', weatherData);

    if(weatherData.error){
      alert(weatherData.reason) // aqui pintar el error en la pantalla
    }

    const { hourly } = weatherData;

    const currentHour = getCurrentHour()

    const paletteNew = {
      id: colorPalettes.length + 1,
      name: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: hourly.temperature_2m[currentHour - 1],
      windSpeed: hourly.windspeed_10m[currentHour - 1],
    };
    setColorPalettes([...colorPalettes, paletteNew]);
    navigate("/");
  };

  return (
    <div className="palette-new-container">
      <span>Crea una nueva ubicación</span>
      <form className="palette-form" onSubmit={handleSubmit(createPalette)}>
        <input
          className="input-palette-name-form"
          type="text"
          placeholder="Nombre de la ciudad"
          {...register("cityName", {
            required: "Debe ingresar un nombre de ciudad",
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className="input-palette-name-form"
          type="text"
          placeholder="Ingrese latitud"
          {...register("latitud", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className="input-palette-name-form"
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

export default PaletteCreation;
