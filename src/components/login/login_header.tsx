import { LOGIN_HEADER_CONST } from "../../constants/login_header";

const LoginHeader = () => {
  return (
    <>
      <img
        className="login-logo"
        src="src/assets/adidas.png"
        alt={LOGIN_HEADER_CONST.logoAlt}
      />
      <div className="login-welcome_text" lang="es">
        {LOGIN_HEADER_CONST.welcome}
      </div>
    </>
  );
};

export default LoginHeader;
