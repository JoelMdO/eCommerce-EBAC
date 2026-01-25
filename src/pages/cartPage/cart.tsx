import { StyledCart } from "../../styles/cart_styled";
import CartHeader from "../../components/cart/cart_header";
import CartBody from "../../components/cart/cart_body";

const Cart = () => {
  return (
    <>
      <StyledCart>
        <CartHeader />
        <CartBody />
      </StyledCart>
    </>
  );
};

export default Cart;
