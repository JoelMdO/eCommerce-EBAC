import { useDispatch, useSelector } from "react-redux";
//import { productsList } from "../../data/products_list";
import { StyledProducts } from "../../styles/products_styled";
import {
  addProduct,
  changeIconToAdded,
  countAddedProduct,
} from "../../redux/slices/cart_slice";
import type { CartState } from "../../types/cart_type";
import type { ProductState } from "../../types/product_type";
import formattedNumber from "../../utils/format_number";
import type { AppDispatch } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/products_slice";
import { HOME_PRODUCTS } from "../../constants/home_products";

const Products = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector(
    (state: ProductState) => state.products,
  );
  const iconAdded: number[] = useSelector(
    (state: CartState) => state.cart.iconAdded || [],
  );
  //
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  //
  return (
    <>
      <StyledProducts>
        {status === "loading" && <p>{HOME_PRODUCTS.loadingText}</p>}
        {items.map((product) => {
          const isAdded = iconAdded.includes(product.id);
          return (
            <div key={product.id}>
              <img
                className="cart-product__image"
                src={product.image}
                alt={product.alt}
              />
              <button
                type="button"
                className={
                  isAdded ? "cart-product_add-active" : "cart-product_add"
                }
                onClick={() => {
                  dispatch(countAddedProduct(product));
                  dispatch(addProduct(product));
                  dispatch(changeIconToAdded(product.id));
                }}
              >
                <span
                  className={
                    isAdded
                      ? "cart-product_add-active "
                      : "cart-product__add-text"
                  }
                >
                  {isAdded ? HOME_PRODUCTS.addedSign : HOME_PRODUCTS.addSign}
                </span>
              </button>
              <h3 className="cart-product__name">{product.name}</h3>
              <p className="cart-product__price">
                {HOME_PRODUCTS.currencyPrefix}{" "}
                {formattedNumber(Number(product.price))}
              </p>
            </div>
          );
        })}
      </StyledProducts>
    </>
  );
};

export default Products;
