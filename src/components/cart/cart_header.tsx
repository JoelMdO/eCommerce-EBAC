import type { AppDispatch } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { closecart } from "../../redux/slices/open_slice";
const CartHeader = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  //
  return (
    <>
      <h2 lang="es">CARRITO</h2>
      <button type="button" onClick={() => dispatch(closecart())}>
        <span className="menu-close__text">X</span>
      </button>
    </>
  );
};
export default CartHeader;
