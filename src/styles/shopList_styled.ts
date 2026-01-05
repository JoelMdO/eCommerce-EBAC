import styled from "styled-components";

export const StyledShopList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 5vw;
  top: 15dvh;
  padding: 25px;
  width: 60vw;
  height: 50dvh;
  box-sizing: border-box;
  background-color: var(--cart-background-color);
  color: var(--black-color);
  box-shadow: -25px 30px 10px 15px var(--cart-box-shadow-color);
  transition: opacity 0.8s ease;
  border-radius: 15px;
  z-index: 50;

  & > button {
    background: var(--red-color);
    border-radius: 15px;
    width: 20px;
    height: 20px;
    border: none;
    padding: 0;
    margin: 0;
    color: var(--white-color);
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & button.active {
    border: 2px solid var(--red-color);
  }

  .menu-close_noproducts-text {
    width: 80%;
    margin-top: 50px;
    font-size: max(1rem, 1.2vw);
    text-align: center;
  }

  .shoplist-checkout-button_container {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 50px;
    height: fit-content;
    margin-top: 20px;
    margin-right: 10vw;
}
    .shoplist-checkout-button {
      margin: 0;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      color: var(--black-color);
      text-decoration: none;
      font-size: max(1rem, 1.2vw);
      background-color: var(--button-addcolor-active);
      box-shadow: 2px 2px 5px var(--blue-color);
      cursor: pointer;
    }

    .shoplist-checkout-button:hover {
      background-color: var(--button-addcolor);
    }

  @media (max-width: 768px) {

  .menu-close_noproducts-text {
    font-size: 16px;
  }

  .shoplist-checkout-button_container {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 50px;
    height: fit-content;
    margin-top: 20px;
    margin-right: 10vw;
}
    .shoplist-checkout-button {
      margin: 0;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      color: var(--black-color);
      text-decoration: none;
      font-size: max(1rem, 1.2vw);
      background-color: var(--button-addcolor-active);
      box-shadow: 2px 2px 5px var(--blue-color);
      cursor: pointer;
    }

    .shoplist-checkout-button:hover {
      background-color: var(--button-addcolor);
    }
  }
  }
`;
