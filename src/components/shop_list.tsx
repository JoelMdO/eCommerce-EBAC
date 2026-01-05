import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store/store";
import { StyledShopList } from "../styles/shopList_styled";
import { closeShopList } from "../slices/open_slice";
import ShopItem from "./shopList_item";
import type { ProductState, ShopList } from "../types/shopList_type";

const ShopList = () => {
  //
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: ProductState) => state.shopList.products
  );
  //
  console.log("procu at shoplist", products);

  return (
    <>
      <StyledShopList>
        {/* <section className="sStyledShopList"> */}
        <h2>CARRITO</h2>
        <button type="button" onClick={() => dispatch(closeShopList())}>
          <span className="menu-close__text">X</span>
        </button>
        {/* </section> */}
        {products.length === 0 && (
          <p className="menu-close_noproducts-text">
            Animate a comprar, aun no hay productos en el carrito
          </p>
        )}
        {products.map((product: ShopList) => (
          <ShopItem
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))}
      </StyledShopList>
    </>
  );
};

export default ShopList;
