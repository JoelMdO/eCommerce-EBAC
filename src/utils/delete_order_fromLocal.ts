const deleteOrderFromLocal = () => {
  localStorage.removeItem("cartProducts");
  localStorage.removeItem("cartProductsCounter");
  localStorage.removeItem("cartTotal");
};

export default deleteOrderFromLocal;
