export type InitialStateType = {
  products: ProductType[];
  loadingProducts: boolean,
  error: {
    message: string,
  },
};

export type ActionWithDataType = {
  type: string;
  data: ProductType[];
};

export type ProductType = {
  index: number;
  isSale: boolean;
  isExclusive: boolean;
  price: string;
  productImage: string;
  productName: string;
  size: string[];
};