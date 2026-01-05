import { useDispatch } from "react-redux";
import { StyledShopItem } from "../styles/shopItem_styled";
import type { ShopList } from "../types/shopList_type";
import {
  countRemovedProduct,
  deleteProduct,
  removedIconToAdded,
} from "../slices/shopList_slice";

const ShopItem = ({ name, image, price, id }: ShopList) => {
  //
  const dispatch = useDispatch();
  console.log("id en shop item", id);
  //
  return (
    <>
      <StyledShopItem>
        <img src={image} alt={name} />
        <div className="cart-product__info">
          <p>{name}</p>
          <p>{price}</p>
        </div>
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
            src="assets/delete-gray-color.png"
            alt="Icono Quitar"
          />
        </button>
      </StyledShopItem>
    </>
  );
};

export default ShopItem;
