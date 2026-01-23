import { useSelector } from "react-redux";
import ShopItem from "../shop_item";
import type { ProductState, cartType } from "../../types/cart_type";
import CartCheckoutButton from "./cart_checkout_button";

const CartBody = () => {
  //
  const products = useSelector((state: ProductState) => state.cart.products);

  return (
    <>
      {products.length === 0 && (
        <p className="menu-close_noproducts-text" lang="es">
          Animate a comprar, aun no hay productos en el carrito
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
