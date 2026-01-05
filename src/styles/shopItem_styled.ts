import styled, { css } from "styled-components";

export const StyledShopItem = styled.div<{ tag?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: fit-content;
  gap: 50px;
  margin: 10px;
  color: var(--black-color);

  ${(props) =>
    props.tag === "checkout"
      ? css`
          text-align: center;
          border: none;
          width: 50%;
          background-image: linear-gradient(
            45deg,
            var(--shop-item) var(--menu-background)
          );
          box-shadow: 0 10px 10px 0px var(--cart-box-shadow-color);
        `
      : css`
          background-image: linear-gradient(
            45deg,
            var(--menu-background),
            var(--shop-item)
          );
          box-shadow: 0 10px 10px 0px var(--cart-box-shadow-color);
        `}

  img {
    width: 100px;
    height: 100px;
  }

  .shop-item__text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
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

  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;

    .shop-item__text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      text-align: center;
      font-size: 12px;
    }

    .delete-icon {
      width: 20px;
      height: 20px;
    }
  }
`;
