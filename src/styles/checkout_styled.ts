import styled from "styled-components";

export const StyledCheckout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  box-sizing: border-box;
  background-image: linear-gradient(
    45deg,
    var(--cart-background-color),
    var(--white-color),
    var(--button-addcolor)
  );

  .cart-checkout-nav-button {
    background: var(--blue-color);
    color: var(--white-color);
  }

  .cart-checkout-button {
    background: var(--button-addcolor-active);
    color: var(--black-color);
  }

  & button {
    background: var(--button-addcolor-active);
    border-radius: 15px;
    width: 150px;
    height: 50px;
    border: none;
    padding: 0;
    margin-top: 20px;
    color: var(--black-color);
    font-size: 1.2em;
    font-weight: 800;
    position: relative;
    cursor: pointer;
  }

  .checkout-logo {
    display: flex;
    position: absolute;
    top: 10dvh;
    right: 10vw;
    width: 110px;
    height: 110px;
  }

  .cart-checkout-button__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }

  .checkout-product__total {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;

    p {
      font-size: 1.2em;
      font-weight: 800;
    }
  }
  .checkout-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
  }

  .checkout-form_name,
  .checkout-form_address,
  .checkout-form_card,
  .checkout-form_phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & input {
      width: 300px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid var(--black-color);
      background-color: transparent;
      padding: 0 10px;
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    .checkout-logo {
      top: 2dvh;
      width: 50px;
      height: 50px;
    }

    h1 {
      text-align: center;
    }
  }
`;
