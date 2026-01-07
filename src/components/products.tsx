import { useDispatch, useSelector } from "react-redux";
import { productsList } from "../data/products_list";
import { StyledProducts } from "../styles/products_styled";
import {
  addProduct,
  changeIconToAdded,
  countAddedProduct,
} from "../slices/shopList_slice";
import type { ProductState } from "../types/shopList_type";
import formattedNumber from "../utils/format_number";

const Products = () => {
  //
  const dispatch = useDispatch();

  const iconAdded: number[] = useSelector(
    (state: ProductState) => state.shopList.iconAdded || []
  );
  //
  return (
    <>
      <StyledProducts>
        {/* <section className="products"> */}
        {productsList.map((product) => {
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
                  {isAdded ? "✓" : "+"}
                </span>
              </button>
              <h3 className="cart-product__name">{product.name}</h3>
              <p className="cart-product__price">
                $ {formattedNumber(Number(product.price))}
              </p>
            </div>
          );
        })}
        {/* </section> */}
      </StyledProducts>
    </>
  );
};

export default Products;
