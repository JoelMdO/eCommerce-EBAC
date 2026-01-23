import { useDispatch, useSelector } from "react-redux";
import { StyledCartButton } from "../../styles/cartButton_styled";
import type { AppDispatch } from "../../redux/store/store";
import { opencart } from "../../redux/slices/open_slice";

const ButtonCart = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(
    (state: { cart: { counter: number } }) => state.cart.counter,
  );
  //
  return (
    <StyledCartButton>
      <button
        type="button"
        className="header-icon__carrito-button"
        onClick={() => dispatch(opencart())}
      >
        <img
          className="header-icon__carrito--img"
          src="src/assets/cart.png"
          alt="Icono de carrito"
        />
        <span id="cartCount" className="cart-count">
          {count}
        </span>
      </button>
    </StyledCartButton>
  );
};

export default ButtonCart;
