import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from './consts';

import { ActionWithDataType, InitialStateType, ProductType } from './types';
const initialState: InitialStateType = {
  products: <ProductType[]>[],
  loadingProducts: false,
  error: {
    message: '',
  },
};

const productReducer = (state = initialState, action: ActionWithDataType) => {
  switch (action.type) {
    case GET_PRODUCTS:
      state = { ...state, loadingProducts: true };
      break;
    case GET_PRODUCTS_SUCCESS:
      state = { ...state, products: action.data, loadingProducts: false };
      break;
    case GET_PRODUCTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingProducts: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default productReducer;
