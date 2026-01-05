import styled from "styled-components";

export const StyledRegister = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    var(--white-color) 20%,
    var(--button-addcolor) 90%,
    var(--header-background) 10%
  );

  h1 {
  display: flex;
    position: absolute;
    top: 20dvh;
    left: 10vw;
    font-size: 2.5em;
    font-weight: 800;
    color: var(--blue-color);
  }

  .register-success_text {
    display: flex;
    position: absolute;
    top: 40dvh;
    left: 10vw;
    width: 40%;
    height: fit-content;
    background-color: var(--button-addcolor-active);
    color: var(--black-color);
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    font-size: 1.2em;
    font-weight: 600;

    & span {
      font-size: 5em;
      margin-right: 10px;
    }
  }

  img {
    display: flex;
    position: absolute;
    top: 20px;
    right: 50px;
    width: 95px;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: fit-content;

    & input {
      width: 100%;
      height: 40px;
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid var(--black-color);
      border-radius: 5px;
      font-size: 1em;
    }

    & button {
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

    & button:hover {
      background-color: var(--button-addcolor-active);
    } 
    
    .register-form-error {
    color: var(--red-color);
    font-size: 0.9em;
    margin-top: -15px;
    margin-bottom: 10px;
    }
  }

    a {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
      margin-top: 20px;
      text-decoration: none;
      color: var(--white-color);
      width: 50%;
      height: 40px;
      background-color: var(--header-background);
      font-weight: 600;
    }

    @media (max-width: 768px) {
  .register-success_text {
    left: 5vw;
    width: 60%;
  }

  img {
    display: flex;
    position: absolute;
    top: 20px;
    right: 50px;
    width: 95px;
  }

  .register-form {
    width: 70%;
  }

    a {
      width: 70%;
    }}

  }
`;
