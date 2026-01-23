import { useDispatch, useSelector } from "react-redux";
import type { ProductState } from "../../types/cart_type";
import { Link } from "react-router";
import { clearProcessed } from "../../redux/slices/cart_slice";

const HeaderCheckout = () => {
  //
  const products = useSelector((state: ProductState) => state.cart.products);
  const purchaseDone = useSelector(
    (state: ProductState) => state.cart.processed,
  );
  const dispatch = useDispatch();
  //
  return (
    <>
      <img className="checkout-logo" src="src/assets/logo.png" alt="Logo" />
      {purchaseDone ? (
        <>
          <h1>Gracias por su compra!</h1>
          <Link to="/home">
            <button
              className="cart-checkout-nav-button"
              type="button"
              lang="es"
              onClick={() => {
                dispatch(clearProcessed());
              }}
            >
              Volver a la tienda
            </button>
          </Link>
        </>
      ) : (
        <>
          {products.length === 0 && !purchaseDone ? (
            <h1 lang="es">Ops! Creo que olvidaste agregar algún producto.</h1>
          ) : (
            <h1 lang="es">Excelente selección</h1>
          )}
        </>
      )}
    </>
  );
};

export default HeaderCheckout;
