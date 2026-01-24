import { StyledHeaderIconMenu } from "../../styles/header_styled";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/slices/open_slice";
import type { AppDispatch } from "../../redux/store/store";
import { HOME_BUTTON_MENU } from "../../constants/home_button_menu";

const ButtonMenu = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  return (
    <>
      <StyledHeaderIconMenu>
        <button
          type="button"
          className="header-icon__menu-button"
          onClick={() => dispatch(openMenu())}
        >
          <img src="src/assets/menu.png" alt={HOME_BUTTON_MENU.menuAlt} />
        </button>
      </StyledHeaderIconMenu>
    </>
  );
};

export default ButtonMenu;
