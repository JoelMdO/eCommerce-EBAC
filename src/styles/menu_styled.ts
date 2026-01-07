import styled from "styled-components";

export const StyledMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 60vh;
  padding: 20px;
  background-color: var(--menu-background);
  box-sizing: border-box;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  position: fixed;
  top: 15dvh;
  left: 0;
  z-index: 50;

  img {
    width: 100%;
    height: auto;
  }

  & > button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & button.active {
    border: 2px solid var(--red-color);
  }

  .menu-close__text {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--red-color);
    color: var(--white-color);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }

  .menu-logout {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 20px;
    text-decoration: none;
    color: var(--black-color);
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40vw;
    top: 15dvh;
    left: 1vw;

    img {
      width: 100%;
      height: auto;
    }

    .menu-close__button {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .menu-close__button.active {
      border: 2px solid var(--red-color);
    }
  }
`;
