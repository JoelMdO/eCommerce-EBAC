import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import totalCalc from "../../utils/total_calc";
import ButtonCheckout from "../checkout/button_checkout";
import { CHECKOUT_TOTAL } from "../../constants/checkout_total_products";
import type { RootState } from "../../redux/store/store";

const TotalProductsCheckout = () => {
  //
  const products = useSelector((state: RootState) => state.cart.products);
  const [price, setPrice] = useState(totalCalc({ products }));
  //
  useEffect(() => {
    const price = totalCalc({ products });
    const setTotalPrice = () => {
      setPrice(price);
      localStorage.setItem("cartTotal", JSON.stringify(price));
    };
    setTotalPrice();
  }, [products]);

  //
  return (
    <>
      <div className="checkout-product__total">
        {products.length === 0 ? null : (
          <p>
            {CHECKOUT_TOTAL.totalLabel} {"$"} {price}
          </p>
        )}
        {products.length === 0 ? (
          <Link to="/home">
            <button
              className="cart-checkout-nav-button"
              type="button"
              lang="es"
            >
              {CHECKOUT_TOTAL.goToStore}
            </button>
          </Link>
        ) : (
          <ButtonCheckout />
        )}
      </div>
    </>
  );
};

export default TotalProductsCheckout;
