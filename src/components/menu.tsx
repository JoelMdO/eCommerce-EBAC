import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { StyledMenu } from "../styles/menu_styled";
import { closeMenu } from "../slices/open_slice";

const Menu = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  return (
    <>
      {/* <section className="menu"> */}
      <StyledMenu>
        <h2>MENU</h2>
        <button
          type="button"
          className="menu-close__button"
          onClick={() => dispatch(closeMenu())}
        >
          <span className="menu-close__text">X</span>
        </button>
        {/* </section> */}
      </StyledMenu>
    </>
  );
};

export default Menu;
