import { useSelector } from "react-redux";
import ShopItem from "../shop_item";
import type { cartType } from "../../types/cart_type";
import CartCheckoutButton from "./cart_checkout_button";
import { CART_BODY } from "../../constants/cart_body";
import type { RootState } from "../../redux/store/store";
//import { useEffect } from "react";
//import { addProduct } from "../../redux/slices/cart_slice";

const CartBody = () => {
  //
  const products = useSelector((state: RootState) => state.cart.products);
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("products length", products.length);
  //   if (products.length === 0) {
  //     const storedProducts = localStorage.getItem("cartProducts");
  //     console.log("stored prodc", storedProducts);

  //     if (storedProducts) {
  //       dispatch(addProduct(JSON.parse(storedProducts)));
  //     }
  //   }
  // }, [products.length, dispatch]);

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
