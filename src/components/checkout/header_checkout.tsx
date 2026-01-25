import { useSelector } from "react-redux";
import { Link } from "react-router";
import { CHECKOUT_HEADER } from "../../constants/checkout_header_checkout";
import type { RootState } from "../../redux/store/store";

const HeaderCheckout = () => {
  //
  const products = useSelector((state: RootState) => state.cart.products);
  const purchaseDone = useSelector(
    (state: RootState) => state.order.status === "succeeded",
  );
  //
  return (
    <>
      <img className="checkout-logo" src="src/assets/logo.png" alt="Logo" />
      {purchaseDone ? (
        <>
          <h1>{CHECKOUT_HEADER.thankYou}</h1>
          <Link to="/home">
            <button
              className="cart-checkout-nav-button"
              type="button"
              lang="es"
            >
              {CHECKOUT_HEADER.backToStore}
            </button>
          </Link>
        </>
      ) : (
        <>
          {products.length === 0 && !purchaseDone ? (
            <h1 lang="es">{CHECKOUT_HEADER.forgotProduct}</h1>
          ) : (
            <h1 lang="es">{CHECKOUT_HEADER.excellent}</h1>
          )}
        </>
      )}
    </>
  );
};

export default HeaderCheckout;
