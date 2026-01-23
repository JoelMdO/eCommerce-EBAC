import { useForm } from "react-hook-form";
import type { FormType } from "../../types/form_type";
import { formSubmission } from "../../utils/form_submission";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

const LoginForm = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onsubmit = (data: FormType) =>
    formSubmission(data, dispatch, setServerError, setLoggingIn, navigate);
  const [serverError, setServerError] = useState<boolean>(false);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  //
  return (
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
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <p className="login-form-error" lang="es">
            {errors.password.type === "minLength"
              ? "Contraseña demasiado corta"
              : "Contraseña incorrecta"}
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
  );
};

export default LoginForm;
