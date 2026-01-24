import type { AppDispatch } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { closecart } from "../../redux/slices/open_slice";
import { CART_HEADER } from "../../constants/cart_cart_header";

const CartHeader = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  return (
    <>
      <h2 lang="es">{CART_HEADER.title}</h2>
      <button type="button" onClick={() => dispatch(closecart())}>
        <span className="menu-close__text">{CART_HEADER.closeText}</span>
      </button>
    </>
  );
};
export default CartHeader;
