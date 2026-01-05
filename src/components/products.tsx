import { useDispatch, useSelector } from "react-redux";
import { productsList } from "../data/products_list";
import { StyledProducts } from "../styles/products_styled";
import {
  addProduct,
  changeIconToAdded,
  countAddedProduct,
} from "../slices/shopList_slice";
import type { ProductState } from "../types/shopList_type";

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
            <article key={product.id}>
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
                  dispatch(addProduct(product));
                  dispatch(changeIconToAdded(product.id));
                  dispatch(countAddedProduct());
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
              <p className="cart-product__price">{product.price}</p>
            </article>
          );
        })}
        {/* </section> */}
      </StyledProducts>
    </>
  );
};

export default Products;
