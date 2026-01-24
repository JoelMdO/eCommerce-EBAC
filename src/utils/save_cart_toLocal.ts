import type { cartType } from "../types/cart_type";

const saveCartToLocalStorage = (incomingProduct: cartType) => {
  localStorage.setItem("cartProducts", JSON.stringify([incomingProduct]));
  const counter = localStorage.getItem("cartProductsCounter");
  if (counter) {
    console.log("counter", typeof JSON.parse(counter), counter);

    const parsedCounter = Number(JSON.parse(counter));
    const newCounter = parsedCounter + 1;
    localStorage.setItem("cartProductsCounter", JSON.stringify(newCounter));
  } else {
    localStorage.setItem("cartProductsCounter", JSON.stringify(1));
  }
};

export default saveCartToLocalStorage;
