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
        <div className="login-welcome_text">Bienvenido</div>
        <div className="login-container">
          <form
            className="login-form"
            onSubmit={handleSubmit(onsubmit)}
            onFocus={() => setServerError(false)}
          >
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="login-form-error">Email incorrecto</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true, maxLength: 8 })}
            />
            {errors.password && (
              <p className="login-form-error">Contraseña incorrecta</p>
            )}
            <button type="submit">{loggingIn ? "Logging..." : "Login"}</button>
          </form>
          {serverError ? (
            <div className="login-register_error_text">
              <p>
                Error de acceso, verifique sus credenciales o contacte al
                administrador
              </p>
            </div>
          ) : (
            <div className="login-register_text">
              <p>¿Sin cuenta, aún?</p>
              <Link to="/register">Regístrate</Link>
            </div>
          )}
        </div>
        <div className="login-footer_text">
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
