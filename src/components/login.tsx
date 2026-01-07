import { useForm } from "react-hook-form";
import { StyledLogin } from "../styles/login_styled";
import type { FormType } from "../types/form_type";
import { formSubmission } from "../utils/form_submission";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<boolean>(false);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const onsubmit = (data: FormType) =>
    formSubmission(data, dispatch, setServerError, setLoggingIn, navigate);
  //
  return (
    <>
      <StyledLogin>
        <img className="login-logo" src="src/assets/adidas.png" alt="Logo" />
        <div className="login-welcome_text" lang="es">
          Bienvenido
        </div>
        <div className="login-container">
          <form
            className="login-form"
            aria-label="Formulario de inicio de sesión"
            onSubmit={handleSubmit(onsubmit)}
            onFocus={() => setServerError(false)}
          >
            <label htmlFor="femail" lang="es">
              Correo
            </label>
            <input
              id="femail"
              type="text"
              placeholder="Correo"
              aria-placeholder="Correo"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="login-form-error" lang="es">
                Email incorrecto
              </p>
            )}
            <label htmlFor="fpassword" lang="es">
              Contraseña
            </label>
            <input
              id="fpassword"
              type="password"
              placeholder="Contraseña"
              aria-placeholder="Contraseña"
              {...register("password", { required: true, maxLength: 8 })}
            />
            {errors.password && (
              <p className="login-form-error" lang="es">
                Contraseña incorrecta
              </p>
            )}
            <button type="submit" lang="es">
              {loggingIn ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </form>
          {serverError ? (
            <div className="login-register_error_text">
              <p lang="es">
                Error de acceso, verifique sus credenciales o contacte al
                administrador
              </p>
            </div>
          ) : (
            <div className="login-register_text">
              <p lang="es">¿Sin cuenta, aún?</p>
              <Link to="/register" lang="es">
                Regístrate
              </Link>
            </div>
          )}
        </div>
        <div className="login-footer_text" lang="es">
          <img
            className="joel-logo"
            src="src/assets/JoeLogo2025.png"
            alt="JoelLogo"
          />
          © 2026 Joel Montes de Oca
        </div>
      </StyledLogin>
    </>
  );
};

export default Login;
