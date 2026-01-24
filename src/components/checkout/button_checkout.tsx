import { Link } from "react-router";
import { CHECKOUT_BUTTON } from "../../constants/checkout_button_checkout";

const ButtonCheckout = () => {
  //
  //
  return (
    <>
      <div className="cart-checkout-button__container">
        <button
          className="cart-checkout-button"
          type="button"
          lang="es"
          onClick={() => {
            const dialog = document.querySelector(
              ".shipment-data_dialog",
            ) as HTMLDialogElement;
            dialog.showModal();
          }}
        >
          {CHECKOUT_BUTTON.payText}
        </button>
        <Link to="/home">
          <button className="cart-checkout-nav-button" type="button" lang="es">
            {CHECKOUT_BUTTON.cancelText}
          </button>
        </Link>
      </div>
    </>
  );
};

export default ButtonCheckout;
