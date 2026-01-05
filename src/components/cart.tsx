// import "../styles/_cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { StyledCart } from "../styles/cart_styled";
import type { AppDispatch } from "../store/store";
import { openShopList } from "../slices/open_slice";

const Cart = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(
    (state: { shopList: { counter: number } }) => state.shopList.counter
  );
  //
  return (
    // <div className="header-icon__carrito">
    <StyledCart>
      <button
        type="button"
        className="header-icon__carrito-button"
        onClick={() => dispatch(openShopList())}
      >
        <img
          className="header-icon__carrito--img"
          src="/assets/cart.png"
          alt="Icono de carrito"
        />
        <span id="cartCount" className="cart-count">
          {count}
        </span>
      </button>
      {/* </div> */}
    </StyledCart>
  );
};

export default Cart;
