import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      headerBackground: string;
      red: string;
      white: string;
      black: string;
      blue: string;
      cartBackground: string;
      cartBoxShadow: string;
      bannerH2: string;
      buttonAdd: string;
      buttonAddActive: string;
      menuBackgroundColor: string;
      shopItem: string;
    };
  }
}

export const theme = {
  colors: {
    headerBackground: "#333",
    red: "#cc0000", // Improved from #ff0000 for better contrast (5.51:1 on white vs 4.00:1)
    white: "#fff",
    black: "#000",
    blue: "#042e5eb0",
    cartBackground: "#87c7e0",
    cartBoxShadow: "rgba(0, 0, 0, 0.3)",
    bannerH2: "rgb(10, 88, 234)",
    buttonAdd: "#e8b408",
    buttonAddActive: "#83e808",
    menuBackgroundColor: "#f5f5f5",
    shopItem: "rgba(239, 209, 33, 0.6)",
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --header-background: ${(props) => props.theme.colors.headerBackground};
    --red-color: ${(props) => props.theme.colors.red};
    --white-color: ${(props) => props.theme.colors.white};
    --black-color: ${(props) => props.theme.colors.black};
    --blue-color: ${(props) => props.theme.colors.blue};
    --cart-background-color: ${(props) => props.theme.colors.cartBackground};
    --cart-box-shadow-color: ${(props) => props.theme.colors.cartBoxShadow};
    --banner-h2-color: ${(props) => props.theme.colors.bannerH2};
    --button-addcolor: ${(props) => props.theme.colors.buttonAdd};
    --button-addcolor-active: ${(props) => props.theme.colors.buttonAddActive};
    --menu-background: ${(props) => props.theme.colors.menuBackgroundColor};
    --shop-item: ${(props) => props.theme.colors.shopItem};
  }

  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

  /* Legacy cart/menu styles moved from SCSS */
  .cart {
    display: none;
    width: 60vw;
    background-color: var(--cart-background-color);
    padding: 25px;
    box-sizing: border-box;
    height: 50dvh;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 5vw;
    top: 100px;
    color: var(--black-color);
    
    box-shadow: -25px 30px 10px 15px var(--cart-box-shadow-color);
    opacity: 0;
    transition: opacity 0.8s ease;
    border-radius: 15px;
  }

  .cart-product {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--black-color);
    text-align: center;
    width: 100%;
    height: fit-content;
  }

  .cart-product img { width: 80px; height: 80px; }

  .cart-product button { margin: 0; padding: 0; background: none; border: none; }

  .cart-product p { font-size: 1.3em; font-weight: 800; margin: 0; padding: 0; }

  .cart-product i { cursor: pointer; }

  .cart-product .delete-icon { width: 30px; height: 30px; }

  .cart-product__info { display: flex; flex-direction: column; justify-content: center; align-items: center; }

  @media (max-width: 500px) {
    .cart-product img { width: 50px; height: 50px; }
    .cart-product p { font-size: 0.8em; }
    .cart-product .delete-icon { width: 20px; height: 20px; }
  }
`;
