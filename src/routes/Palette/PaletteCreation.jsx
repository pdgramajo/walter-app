import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getTags } from '../../service';
import { getUbication } from '../../service';
import { ColorPalettesContext } from '../../context/ColorPalettesContext';
import './PaletteCreation.css';

const PaletteCreation = () => {
  const [tags, setTags] = useState([]);
  const { colorPalettes, setColorPalettes } = useContext(ColorPalettesContext)
  const navigate = useNavigate()
  console.log("colorddd",colorPalettes);
  const datos = '';
  useEffect(() => {
    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.log(err));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
     cityName:"tilcara",
     longitud:"-23.5791908",
     latitud:"-65.404902"
     
    }
  });

  const onSubmit = (resp) => {
    console.log("res",resp);
    getUbication(resp.latitud, resp.longitud)
      .then((data) => {
        console.log("Data obtenido desde palette: ", data.generationtime_ms);
        //  BUSCAR COMO AGREGAR EL DATA A OTRA VARIABLE
        console.log("data",data);
        datos = data;

      })
      .catch((err) => console.log(err));


    const paletteNew = {
      id: colorPalettes.length + 1,
      name: resp.cityName,
      colors: [resp.color1, resp.color2, resp.color3, resp.color4],
      liked: false,
      tags: [resp.tag],
      latitud: resp.latitud,
      longitud: resp.longitud
    }
    console.log("Creado: ", datos);
    setColorPalettes([...colorPalettes, paletteNew])
    navigate('/')
  }

  return (
    <div className='palette-new-container'>
      <span>Crea una nueva ubicación</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Nombre de la ciudad'
          {...register('cityName', {
            required: 'Debe ingresar un nombre de ciudad',
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Ingrese latitud'
          {...register('latitud', {
            required: 'Debe ingresar latitud',
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Ingrese longitud'
          {...register('longitud', {
            required: 'Debe ingresar longitud',
          })}
        />
        <p>{errors.longitud?.message}</p>

        <button className='btn-form' type='submit'>
          Crear Ubicación
        </button>
      </form>
    </div>
  );
};

export default PaletteCreation;
