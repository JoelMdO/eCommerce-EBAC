import { useForm } from "react-hook-form";
import type { FormType } from "../../types/form_type";
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
        aria-label={LOGIN_FORM.formAria}
        onSubmit={handleSubmit(onsubmit)}
        onFocus={() => setServerError(false)}
      >
        <label htmlFor="femail" lang="es">
          {LOGIN_FORM.labelEmail}
        </label>
        <input
          id="femail"
          type="text"
          placeholder={LOGIN_FORM.placeholderEmail}
          aria-placeholder={LOGIN_FORM.placeholderEmail}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="login-form-error" lang="es">
            {LOGIN_FORM.emailError}
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
