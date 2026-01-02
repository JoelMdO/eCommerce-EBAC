import Cart from "./cart";
import Menu from "./menu";
import ShopList from "./shop_list";
import "../styles/_header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-icon__menu">
          <button type="button" className="header-icon__menu-button">
            <img
              className="header-icon__menu--img"
              src="/assets/menu.png"
              alt="Icon Menu"
            />
          </button>
        </div>
        <img
          className="header-logo"
          src="/assets/adidas.png"
          alt="Logo Adidas"
        />
        <Cart />
        <Menu />
        <ShopList />
      </header>
    </>
  );
};

export default Header;
