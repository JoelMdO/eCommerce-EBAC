import LoginFooter from "../../components/login/login_footer";
import LoginForm from "../../components/login/login_form";
import LoginHeader from "../../components/login/login_header";
import { StyledLogin } from "../../styles/login_styled";

const Login = () => {
  //
  return (
    <>
      <StyledLogin>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </StyledLogin>
    </>
  );
};

export default Login;
