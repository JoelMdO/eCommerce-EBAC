import Cart from "./cart";
import Menu from "./menu";
import {
  StyledHeader,
  StyledHeaderIconMenu,
  StyledLogoImage,
} from "../styles/header_styled";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../slices/open_slice";
import type { RootState, AppDispatch } from "../store/store";
import ShopList from "./shop_list";

const Header = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const toOpenShopList = useSelector(
    (state: RootState) => state.openState.shopListOpen
  );
  const toOpenMenu = useSelector(
    (state: RootState) => state.openState.menuOpen
  );
  //
  return (
    <>
      {/* <header className="header"> */}
      <StyledHeader>
        {/* <div className="header-icon__menu"> */}
        <StyledHeaderIconMenu>
          <button
            type="button"
            className="header-icon__menu-button"
            onClick={() => dispatch(openMenu())}
          >
            <img src="src/assets/menu.png" alt="Icon Menu" />
          </button>
        </StyledHeaderIconMenu>
        {/* <img */}
        <StyledLogoImage
          className="header-logo"
          src="src/assets/adidas.png"
          alt="Logo Adidas"
        />
        <Cart />
        {/* </header> */}
      </StyledHeader>
      {toOpenMenu && <Menu />}
      {toOpenShopList && <ShopList />}
    </>
  );
};

export default Header;
