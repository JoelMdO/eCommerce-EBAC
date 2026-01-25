import { useSelector } from "react-redux";
import ShopItem from "../shop_item";
import type { cartType } from "../../types/cart_type";
import CartCheckoutButton from "./cart_checkout_button";
import { CART_BODY } from "../../constants/cart_body";
import type { RootState } from "../../redux/store/store";

const CartBody = () => {
  //
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      {products.length === 0 && (
        <p className="menu-close_noproducts-text" lang="es">
          {CART_BODY.emptyText}
        </p>
      )}
      {products.map((product: cartType) => (
        <ShopItem
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          id={product.id}
        />
      ))}
      {products.length > 0 && <CartCheckoutButton />}
    </>
  );
};

export default CartBody;
