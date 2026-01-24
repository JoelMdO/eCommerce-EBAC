import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store/store";
import { StyledMenu } from "../../styles/menu_styled";
import { closeMenu } from "../../redux/slices/open_slice";
import { Link } from "react-router";
import { HOME_MENU } from "../../constants/home_menu";

const Menu = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  return (
    <>
      <StyledMenu aria-controls="menu">
        <h2 lang="es">{HOME_MENU.title}</h2>
        <button
          id="menubutton-close"
          type="button"
          className="menu-close__button"
          aria-labelledby="menubutton-close"
          onClick={() => dispatch(closeMenu())}
        >
          <span className="menu-close__text" aria-label="Cerrar">
            {HOME_MENU.closeText}
          </span>
        </button>
        <Link to="/" role="navigation">
          <span className="menu-logout" lang="es" aria-label={"Cerrar sesión"}>
            {HOME_MENU.logoutText}
          </span>
        </Link>
      </StyledMenu>
    </>
  );
};

export default Menu;
