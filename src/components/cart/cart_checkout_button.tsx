import { Link } from "react-router";

const CartCheckoutButton = () => {
  //
  return (
    <>
      <div className="cart-checkout-button_container">
        <Link
          className="cart-checkout-button"
          to="/checkout"
          lang="es"
          role="navigation"
        >
          Comprar
        </Link>
      </div>
    </>
  );
};

export default CartCheckoutButton;
