import "../styles/_cart.scss";
const Cart = () => {
  return (
    <div className="header-icon__carrito">
      <button type="button" className="header-icon__carrito-button">
        <img
          className="header-icon__carrito--img"
          src="/assets/cart.png"
          alt="Icono de carrito"
        />
        <span id="cartCount" className="cart-count">
          0
        </span>
      </button>
    </div>
  );
};

export default Cart;
