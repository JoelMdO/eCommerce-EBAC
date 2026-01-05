import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { StyledMenu } from "../styles/menu_styled";
import { closeMenu } from "../slices/open_slice";
import { Link } from "react-router";

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
        <Link to="/">
          <span className="menu-logout">Logout</span>
        </Link>
        {/* </section> */}
      </StyledMenu>
    </>
  );
};

export default Menu;
