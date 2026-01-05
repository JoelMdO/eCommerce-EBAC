import styled from "styled-components";

export const StyledShopItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: fit-content;
  background-color: transparent;
  gap: 50px;
  margin: 10px;
  color: var(--black-color);
  background-image: linear-gradient(45deg, var(--menu-background), var(--shop-item));
  box-shadow: 0 10px 10px 0px var(--cart-box-shadow-color);

  img {
    width: 100px;
    height: 100px;
  }

  .delete-icon {
    width: 50px;
    height: 50px;
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }

  p {
    font-size: 1.3em;
    font-weight: 800;
    margin: 0;
    padding: 0;

    &:nth-child(2) {
      font-weight: 600;
    }
  }

  i {
    cursor: pointer;
  }



  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .cart-product {
    img {
      width: 50px;
      height: 50px;
    }

    p {
      font-size: 0.8em;
    }
    .delete-icon {
      width: 20px;
      height: 20px;
    }
  }
}
`;
