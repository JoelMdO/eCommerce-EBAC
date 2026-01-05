import { Link, useNavigate } from "react-router";
import { StyledRegister } from "../styles/register_styled";
import { useForm } from "react-hook-form";
import type { UserData } from "../types/form_type";
import { useState } from "react";
import userRegister from "../utils/user_register";

const Register = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const [serverError, setServerError] = useState<boolean>(false);
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const onsubmit = (data: UserData) =>
    userRegister(
      data,
      setServerError,
      setRegisteringIn,
      navigate,
      setRegisterSuccess
    );
  const [registeringIn, setRegisteringIn] = useState<boolean>(false);
  //
  return (
    <StyledRegister>
      <h1>Bienvenido</h1>
      {registerSuccess ? (
        <div className="register-success_text">
          <span>🛍</span>
          <p>Registro exitoso, serás redirigido al login</p>
        </div>
      ) : (
        <>
          <h2>Registra tu cuenta</h2>
          <img
            className="register-logo"
            src="src/assets/adidas.png"
            alt="Logo"
          />
          <form className="register-form" onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 80 })}
            />
            {errors.name && (
              <p className="register-form-error">Nombre incorrecto</p>
            )}
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="register-form-error">Email incorrecto</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="register-form-error">Contraseña incorrecta</p>
            )}
            <button type="submit">
              {registeringIn ? "Creando registro..." : "Registrate"}
            </button>
          </form>
          <Link className="register-nav_link" to="/">
            Cancelar
          </Link>
          {serverError ? (
            <div className="register_error_text">
              <p>
                Error en registro, por favor intente de nuevo o contacte al
                administrador
              </p>
            </div>
          ) : null}
        </>
      )}
    </StyledRegister>
  );
};

export default Register;
