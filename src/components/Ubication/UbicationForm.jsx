import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UbicationForm = ({ initialValue, submit, title, btnLabel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(initialValue); // https://react-hook-form.com/api/useform/reset
  }, [initialValue, reset]);

  return (
    <div className="ubication-new-container">
      <span>{title}</span>
      <form className="ubication-form" onSubmit={handleSubmit(submit)}>
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
          {btnLabel}
        </button>
      </form>
    </div>
  );
};

export default UbicationForm;
