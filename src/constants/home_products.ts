export const HOME_PRODUCTS = {
  loadingText: "Loading...",
  loadingDots: "...",
  addSign: "+",
  addedSign: "✓",
  currencyPrefix: "$",
} as const;

export type HomeProductsKeys = keyof typeof HOME_PRODUCTS;
