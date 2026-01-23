import { useDispatch, useSelector } from "react-redux";
import { productsList } from "../../data/products_list";
import { StyledProducts } from "../../styles/products_styled";
import {
  addProduct,
  changeIconToAdded,
  countAddedProduct,
} from "../../redux/slices/cart_slice";
import type { ProductState } from "../../types/cart_type";
import formattedNumber from "../../utils/format_number";
import type { AppDispatch } from "../../redux/store/store";

const Products = () => {
  //
  const dispatch = useDispatch<AppDispatch>();

  const iconAdded: number[] = useSelector(
    (state: ProductState) => state.cart.iconAdded || [],
  );
  //
  return (
    <>
      <StyledProducts>
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
      </StyledProducts>
    </>
  );
};

export default Products;
