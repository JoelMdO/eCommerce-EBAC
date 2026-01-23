import { useSelector } from "react-redux";
import type { ProductState } from "../../types/cart_type";
import DialogCheckout from "./dialog_checkout";
import ShopItem from "../shop_item";
import TotalProductsCheckout from "./total_products_checkout";

const BodyCheckout = () => {
  //
  const products = useSelector((state: ProductState) => state.cart.products);
  const purchaseDone = useSelector(
    (state: ProductState) => state.cart.processed,
  );
  //
  return (
    <>
      {!purchaseDone ? (
        <>
          {products.map((product) => (
            <ShopItem
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              id={product.id}
              tag="checkout"
            />
          ))}
          <DialogCheckout />
          <TotalProductsCheckout />
        </>
      ) : null}
    </>
  );
};

export default BodyCheckout;
