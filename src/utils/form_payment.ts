// import { processPayment } from "../redux/slices/cart_slice";
import type { AppDispatch } from "../redux/store/store";
import { setOrders } from "../redux/thunks/setOrder";
import type { ShipmentDataType } from "../types/form_type";
import getRefreshToken from "./refresh_token";

export const formPayment = async (
  dispatch: AppDispatch,
  data: ShipmentDataType,
) => {
  ///--------------------------------------------------------
  // IMPORTANT NOTE:
  // For dev purposes no store of this data, in case the product goes to production
  // it needs to be handle to a proper DB.
  ///--------------------------------------------------------
  // dispatch(processPayment());
  // token helpers using sessionStorage
  const user_name = JSON.parse(localStorage.getItem("username")!);
  const pre_total = JSON.parse(localStorage.getItem("cartTotal")!).replace(
    /,/g,
    "",
  );
  const total = Number(pre_total);
  const token = await getRefreshToken();
  console.log("token", token);

  const order = {
    user_name: user_name,
    cart: JSON.parse(localStorage.getItem("cartProducts")!),
    total: total,
    address: {
      user_name: data.name,
      address: data.address,
      card: data.creditCard,
      phone: data.phone,
    },
  };
  console.log("order", order);

  dispatch(setOrders({ order: order, token: token }));
};
