import { useSelector } from "react-redux";
import type { ProductState } from "../../types/cart_type";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import totalCalc from "../../utils/total_calc";
import ButtonCheckout from "../checkout/button_checkout";

const TotalProductsCheckout = () => {
  //
  const products = useSelector((state: ProductState) => state.cart.products);
  const [price, setPrice] = useState(totalCalc({ products }));
  //
  useEffect(() => {
    const setTotalPrice = () => {
      setPrice(totalCalc({ products }));
    };
    setTotalPrice();
  }, [products]);

  //
  return (
    <>
      <div className="checkout-product__total">
        {products.length === 0 ? null : <p>Total: $ {price}</p>}
        {products.length === 0 ? (
          <Link to="/home">
            <button
              className="cart-checkout-nav-button"
              type="button"
              lang="es"
            >
              Ir a la tienda
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
