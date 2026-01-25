import type { cartType } from "../types/cart_type";

const deleteCartFromLocalStorage = (deleteProduct: cartType[]) => {
  localStorage.setItem("cartProducts", JSON.stringify(deleteProduct));
  const counter = localStorage.getItem("cartProductsCounter");
  if (counter) {
    const parsedCounter = JSON.parse(counter);
    const newCounter = parsedCounter - 1;
    localStorage.setItem("cartProductsCounter", JSON.stringify(newCounter));
  } else {
    localStorage.setItem("cartProductsCounter", JSON.stringify(1));
  }
};

export default deleteCartFromLocalStorage;
