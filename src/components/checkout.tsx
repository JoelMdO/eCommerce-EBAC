import { useDispatch, useSelector } from "react-redux";
import { StyledCheckout } from "../styles/checkout_styled";
import type { ProductState } from "../types/shopList_type";
import { Link } from "react-router";
import ShopItem from "./shopList_item";
import { useEffect, useState } from "react";
import totalCalc from "../utils/total_calc";
import ShipmentDataForm from "./shipment_dataForm";

const Checkout = () => {
  //
  const products = useSelector(
    (state: ProductState) => state.shopList.products
  );
  const dispatch = useDispatch();
  const [price, setPrice] = useState(totalCalc({ products }));
  const purchaseDone = useSelector(
    (state: ProductState) => state.shopList.processed
  );
  console.log(purchaseDone);
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
      <StyledCheckout>
        <img className="checkout-logo" src="src/assets/logo.png" alt="Logo" />
        {purchaseDone ? (
          <h1>Gracias por su compra!</h1>
        ) : (
          <>
            {products.length === 0 && !purchaseDone ? (
              <h1>Ops! Creo que olvidaste agregar algún producto.</h1>
            ) : (
              <h1>Excelente selección</h1>
            )}
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
            <dialog className="shipment-data_dialog">
              <ShipmentDataForm
                dispatch={dispatch}
                closeDialog={() => {
                  const dialog = document.querySelector(
                    ".shipment-data_dialog"
                  ) as HTMLDialogElement;
                  dialog.close();
                }}
              />
            </dialog>
            <div className="checkout-product__total">
              {products.length === 0 ? null : <p>Total: $ {price}</p>}
              {products.length === 0 ? (
                <Link to="/home">
                  <button
                    className="shoplist-checkout-nav-button"
                    type="button"
                  >
                    Ir a la tienda
                  </button>
                </Link>
              ) : (
                <div className="shoplist-checkout-button__container">
                  <button
                    className="shoplist-checkout-button"
                    type="button"
                    onClick={() => {
                      const dialog = document.querySelector(
                        ".shipment-data_dialog"
                      ) as HTMLDialogElement;
                      dialog.showModal();
                    }}
                  >
                    Pagar
                  </button>
                  <Link to="/home">
                    <button
                      className="shoplist-checkout-nav-button"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </StyledCheckout>
    </>
  );
};

export default Checkout;
