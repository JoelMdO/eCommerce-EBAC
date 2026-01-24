import { useDispatch } from "react-redux";
import { StyledShopItem } from "../styles/shopItem_styled";
import type { cartType } from "../types/cart_type";
import {
  countRemovedProduct,
  deleteProduct,
  removedIconToAdded,
} from "../redux/slices/cart_slice";
import formattedNumber from "../utils/format_number";
import { SHOP_ITEM } from "../constants/shop_item";

const ShopItem = ({ name, image, price, id, tag }: cartType) => {
  //
  const dispatch = useDispatch();
  console.log("id en shop item", id);
  //
  return (
    <>
      <StyledShopItem tag={tag}>
        <img src={image} alt={name} />
        <div className="shop-item__text-container">
          <p lang="es">{name}</p>
          <p lang="es">
            {SHOP_ITEM.currencyPrefix} {`${formattedNumber(Number(price))}`}
          </p>
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
              alt={SHOP_ITEM.deleteAlt}
            />
          </button>
        )}
      </StyledShopItem>
    </>
  );
};

export default ShopItem;
