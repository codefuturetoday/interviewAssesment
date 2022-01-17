import { combineReducers } from 'redux';

import productReducer from 'Components/layout/containers/productsStore/reducer';

const reducer = combineReducers({
  productReducer,
});
export type InititalStoreState = ReturnType<typeof reducer>;
export default reducer;
