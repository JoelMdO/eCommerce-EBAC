import styled from "styled-components";

export const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-image: linear-gradient(
    45deg,
    var(--header-background),
    var(--button-addcolor)
  );

  .login-logo {
    display: flex;
    position: absolute;
    top: 20px;
    right: 50px;
    width: 15vw;
  }

  .login-welcome_text {
    font-size: 3em;
    font-weight: 800;
    color: var(--white-color);
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 300px;
    background-color: var(--cart-background-color);
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
  }

  .login-form input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--black-color);
    border-radius: 5px;
    font-size: 1em;
  }

  .login-form button {
    width: 100%;
    height: 40px;
    background-color: var(--banner-h2-color);
    color: var(--white-color);
    border: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .login-form button:hover {
    background-color: var(--button-addcolor-active);
  }

  .login-form-error {
    color: var(--red-color);
    font-size: 0.9em;
    margin-top: -15px;
    margin-bottom: 10px;
  }

  .login-register_text {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;
    margin-right: 15%;
    gap: 20px;

    & p {
      color: var(--black-color);
      font-size: 1em;
      margin: 0;
      padding: 0;
    }

    & a {
      width: 100px;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      padding: 5px;
      color: var(--black-color);
      background-color: var(--button-addcolor);
      font-size: 1em;
      text-decoration: none;
      margin-top: 5px;
      transition: color 0.3s ease;
    }
  }

  .login-register_error_text {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;

    & p {
      text-align: center;
      color: var(--red-color);
      font-size: 1em;
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
  }

  .login-footer_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 10px;
    font-size: 0.8em;
    color: var(--white-color);
  }

  .joel-logo {
    display: flex;
    width: 80px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    .login-welcome_text {
      font-size: 2em;
    }

    .login-container {
      width: 80%;
    }
  }
`;
