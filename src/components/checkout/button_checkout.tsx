import { Link } from "react-router";

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
          Pagar
        </button>
        <Link to="/home">
          <button className="cart-checkout-nav-button" type="button" lang="es">
            Cancelar
          </button>
        </Link>
      </div>
    </>
  );
};

export default ButtonCheckout;
