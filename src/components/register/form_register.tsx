import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import type { UserData } from "../../types/form_type";
import { useState } from "react";
import userRegister from "../../utils/user_register";

const FormRegister = ({
  setRegisterSuccess,
}: {
  setRegisterSuccess: (registerSuccess: boolean) => void;
}) => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const [serverError, setServerError] = useState<boolean>(false);
  const navigate = useNavigate();
  const onsubmit = (data: UserData) =>
    userRegister(
      data,
      setServerError,
      setRegisteringIn,
      navigate,
      setRegisterSuccess,
    );
  const [registeringIn, setRegisteringIn] = useState<boolean>(false);
  //
  return (
    <>
      <h2 lang="es">Registra tu cuenta</h2>
      <img className="register-logo" src="../../assets/adidas.png" alt="Logo" />
      <form
        className="register-form"
        aria-label="Formulario de registro de usuarios"
        onSubmit={handleSubmit(onsubmit)}
      >
        <label lang="es" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          aria-placeholder="Nombre"
          {...register("name", { required: true, maxLength: 80 })}
        />
        {errors.name && (
          <p className="register-form-error" lang="es">
            Nombre incorrecto
          </p>
        )}
        <label lang="es" htmlFor="email">
          Correo
        </label>
        <input
          id="email"
          type="text"
          placeholder="Correo"
          aria-placeholder="Correo"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="register-form-error" lang="es">
            Correo incorrecto
          </p>
        )}
        <input
          type="password"
          placeholder="Contraseña"
          aria-placeholder="Contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="register-form-error" lang="es">
            Contraseña incorrecta
          </p>
        )}
        <button type="submit">
          {registeringIn ? "Creando registro..." : "Registrate"}
        </button>
      </form>
      <Link className="register-nav_link" to="/" lang="es" role="navigation">
        Cancelar
      </Link>
      {serverError ? (
        <div className="register_error_text">
          <p lang="es">
            Error en registro, por favor intente de nuevo o contacte al
            administrador
          </p>
        </div>
      ) : null}
    </>
  );
};

export default FormRegister;
