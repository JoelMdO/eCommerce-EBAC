import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import type { UserData } from "../../types/form_type";
import { useState } from "react";
import userRegister from "../../utils/user_register";
import { REGISTER_FORM } from "../../constants/register_form_register";
import type { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

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
  //
  const [serverError, setServerError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { status, error } = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();
  //
  const onsubmit = (data: UserData) =>
    userRegister(
      data,
      setServerError,
      setRegisteringIn,
      navigate,
      setRegisterSuccess,
      status,
      dispatch,
    );
  const [registeringIn, setRegisteringIn] = useState<boolean>(false);
  //
  return (
    <>
      <h2 lang="es">{REGISTER_FORM.heading}</h2>
      <img
        className="register-logo"
        src="src/assets/adidas.png"
        alt={REGISTER_FORM.logoAlt}
      />
      <form
        className="register-form"
        aria-label={REGISTER_FORM.formAria}
        onSubmit={handleSubmit(onsubmit)}
      >
        <label lang="es" htmlFor="name">
          {REGISTER_FORM.labelName}
        </label>
        <input
          id="name"
          type="text"
          placeholder={REGISTER_FORM.placeholderName}
          aria-placeholder={REGISTER_FORM.placeholderName}
          {...register("username", { required: true, maxLength: 80 })}
        />
        {errors.username && (
          <p className="register-form-error" lang="es">
            {REGISTER_FORM.nameError}
          </p>
        )}
        <label lang="es" htmlFor="email">
          {REGISTER_FORM.labelEmail}
        </label>
        <input
          id="email"
          type="text"
          placeholder={REGISTER_FORM.placeholderEmail}
          aria-placeholder={REGISTER_FORM.placeholderEmail}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <p className="register-form-error" lang="es">
            {REGISTER_FORM.emailError}
          </p>
        )}
        <input
          type="password"
          placeholder={REGISTER_FORM.placeholderPassword}
          aria-placeholder={REGISTER_FORM.placeholderPassword}
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="register-form-error" lang="es">
            {REGISTER_FORM.passwordError}
          </p>
        )}
        <input
          type="password"
          placeholder={REGISTER_FORM.placeholderPassword2}
          aria-placeholder={REGISTER_FORM.placeholderPassword2}
          {...register("password2", { required: true })}
        />
        {errors.password2 && (
          <p className="register-form-error" lang="es">
            {REGISTER_FORM.passwordError}
          </p>
        )}
        <button type="submit">
          {registeringIn
            ? REGISTER_FORM.creatingText
            : REGISTER_FORM.submitText}
        </button>
      </form>
      <Link className="register-nav_link" to="/" lang="es" role="navigation">
        {REGISTER_FORM.cancelText}
      </Link>
      {serverError ? (
        <div className="register_error_text">
          <p lang="es">
            {REGISTER_FORM.serverError}
            {error}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default FormRegister;
