import styled from "styled-components";

export const StyledProducts = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    color: var(--black-color);

    article {
      cursor: pointer;
      text-align: center;
    }

    img {
      width: 200px;
      margin-bottom: 15px;
    }

    h3 {
      font-weight: 500;
      font-size: 17px;
      margin-bottom: 5px;
    }

    p {
      font-weight: 300; 
      font-size: 15px;
      color: var(--black-color);
    }

    button {
      margin-top: 10px;
      padding: 10px 15px;
      background-color: var(--button-addcolor);
      border: none;
      border-radius: 5px;
      color: var(--white-color);
      font-size: 14px;
      cursor: pointer;
      z-index: 50;
    }

    .cart-product_add-active {
      background-color: var(--button-addcolor-active);
    }
  }
`;
