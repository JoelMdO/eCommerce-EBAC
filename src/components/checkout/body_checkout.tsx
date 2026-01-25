import { useDispatch, useSelector } from "react-redux";
import DialogCheckout from "./dialog_checkout";
import ShopItem from "../shop_item";
import TotalProductsCheckout from "./total_products_checkout";
import type { RootState, AppDispatch } from "../../redux/store/store";
import { useEffect } from "react";
import deleteOrderFromLocal from "../../utils/delete_order_fromLocal";
import { clearCartAfterOrder } from "../../redux/slices/cart_slice";

const BodyCheckout = () => {
  //
  const products = useSelector((state: RootState) => state.cart.products);
  const purchaseDone = useSelector(
    (state: RootState) => state.order.status === "succeeded",
  );
  const dispatch = useDispatch<AppDispatch>();

  //
  useEffect(() => {
    if (purchaseDone) {
      const dialog = document.querySelector(
        ".shipment-data_dialog",
      ) as HTMLDialogElement;
      dialog?.close?.();
      deleteOrderFromLocal();
      dispatch(clearCartAfterOrder());
    }
  }, [purchaseDone, dispatch]);
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
