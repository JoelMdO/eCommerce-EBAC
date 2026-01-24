const loadCartFromLocalStorage = () => {
  const storedCounter = localStorage.getItem("cartProductsCounter");
  const storedProducts = localStorage.getItem("cartProducts");
  const storedTotal = localStorage.getItem("cartTotal");
  return {
    counter: storedCounter ? JSON.parse(storedCounter) : 0,
    products: storedProducts ? JSON.parse(storedProducts) : [],
    total: storedTotal ? JSON.parse(storedTotal) : 0,
  };
};

export default loadCartFromLocalStorage;
