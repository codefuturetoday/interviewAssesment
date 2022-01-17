import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from './consts';
import { ProductType } from './types';
export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSuccess = (data: ProductType[]) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    data,
  };
};

export const getProductsFail = () => {
  return {
    type: GET_PRODUCTS_FAIL,
  };
};
