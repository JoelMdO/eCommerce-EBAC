import { useForm } from "react-hook-form";
import type { UserData } from "../../types/form_type";
import { formSubmission } from "../../utils/form_submission";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { LOGIN_FORM } from "../../constants/login_login_form";

const LoginForm = () => {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onsubmit = (data: UserData) =>
    formSubmission(data, dispatch, setServerError, setLoggingIn, navigate);
  const [serverError, setServerError] = useState<boolean>(false);
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  //
  return (
    <div className="login-container">
      <form
        className="login-form"
        aria-label={LOGIN_FORM.formAria}
        onSubmit={handleSubmit(onsubmit)}
        onFocus={() => setServerError(false)}
      >
        <label htmlFor="username" lang="es">
          {LOGIN_FORM.labelUserName}
        </label>
        <input
          id="username"
          type="text"
          placeholder={LOGIN_FORM.placeholderUserName}
          aria-placeholder={LOGIN_FORM.placeholderUserName}
          {...register("username", {
            required: true,
          })}
        />
        {errors.username && (
          <p className="login-form-error" lang="es">
            {LOGIN_FORM.userNameError}
          </p>
        )}
        <label htmlFor="fpassword" lang="es">
          {LOGIN_FORM.labelPassword}
        </label>
        <input
          id="fpassword"
          type="password"
          placeholder={LOGIN_FORM.placeholderPassword}
          aria-placeholder={LOGIN_FORM.placeholderPassword}
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <p className="login-form-error" lang="es">
            {errors.password.type === "minLength"
              ? LOGIN_FORM.passwordMinLength
              : LOGIN_FORM.passwordIncorrect}
          </p>
        )}
        <button type="submit" lang="es">
          {loggingIn ? LOGIN_FORM.loggingInText : LOGIN_FORM.submitText}
        </button>
      </form>
      {serverError ? (
        <div className="login-register_error_text">
          <p lang="es">{LOGIN_FORM.serverError}</p>
        </div>
      ) : (
        <div className="login-register_text">
          <p lang="es">{LOGIN_FORM.noAccountText}</p>
          <Link to="/register" lang="es">
            {LOGIN_FORM.registerLinkText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
