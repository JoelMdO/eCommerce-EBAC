import { StyledCheckout } from "../../styles/checkout_styled";
import HeaderCheckout from "../../components/checkout/header_checkout";
import BodyCheckout from "../../components/checkout/body_checkout";

const Checkout = () => {
  //
  //
  return (
    <>
      <StyledCheckout>
        <HeaderCheckout />
        <BodyCheckout />
      </StyledCheckout>
    </>
  );
};

export default Checkout;
