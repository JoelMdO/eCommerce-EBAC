export const HOME_PRODUCTS = {
  loadingText: "Loading...",
  addSign: "+",
  addedSign: "✓",
  currencyPrefix: "$",
} as const;

export type HomeProductsKeys = keyof typeof HOME_PRODUCTS;
