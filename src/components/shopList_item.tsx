import { useDispatch } from "react-redux";
import { StyledShopItem } from "../styles/shopItem_styled";
import type { ShopListType } from "../types/shopList_type";
import {
  countRemovedProduct,
  deleteProduct,
  removedIconToAdded,
} from "../slices/shopList_slice";
import formattedNumber from "../utils/format_number";

const ShopItem = ({ name, image, price, id, tag }: ShopListType) => {
  //
  const dispatch = useDispatch();
  console.log("id en shop item", id);
  //
  return (
    <>
      <StyledShopItem tag={tag}>
        <img src={image} alt={name} />
        <div className="shop-item__text-container">
          <p>{name}</p>
          <p>$ {`${formattedNumber(Number(price))}`}</p>
        </div>
        {tag === "checkout" ? null : (
          <button
            type="button"
            className="cart-product__delete-button"
            onClick={() => {
              dispatch(deleteProduct({ id: id }));
              dispatch(countRemovedProduct());
              dispatch(removedIconToAdded(id || 0));
            }}
          >
            <img
              className="delete-icon"
              src="src/assets/delete-gray-color.png"
              alt="Icono Quitar"
            />
          </button>
        )}
      </StyledShopItem>
    </>
  );
};

export default ShopItem;
