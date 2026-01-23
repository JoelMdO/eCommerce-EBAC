import Cart from "../../pages/cartPage/cart";
import Menu from "./menu";
import { StyledHeader, StyledLogoImage } from "../../styles/header_styled";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import ButtonMenu from "./button_menu";
import ButtonCart from "./cart_button";

const Header = () => {
  //
  const toOpencart = useSelector(
    (state: RootState) => state.openState.cartOpen,
  );
  const toOpenMenu = useSelector(
    (state: RootState) => state.openState.menuOpen,
  );
  //
  return (
    <>
      <StyledHeader>
        <ButtonMenu />
        <StyledLogoImage
          className="header-logo"
          src="src/assets/adidas.png"
          alt="Logo Adidas"
        />
        <ButtonCart />
      </StyledHeader>
      {toOpenMenu && <Menu />}
      {toOpencart && <Cart />}
    </>
  );
};

export default Header;
