import type { ShopListType } from "../types/shopList_type";
import formattedNumber from "./format_number";

const totalCalc = ({ products }: { products: ShopListType[] }) => {
  let price = 0;
  if (products.length > 0) {
    products.forEach((product) => {
      console.log("product price", product);

      price = price + Number(product.price);
    });
  }
  return formattedNumber(price);
};
export default totalCalc;
