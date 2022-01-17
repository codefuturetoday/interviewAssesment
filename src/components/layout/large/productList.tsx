import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from '../medium/product';
import { ProductType, SelectedOptionType } from './types';
import { InititalStoreState } from '../../../store/reducer';
const StyledProductSection = styled.section``;

const ProductList = ({ selectedOption }: SelectedOptionType) => {
  const { products, loadingProducts } = useSelector(
    (state: InititalStoreState) => state.productReducer
  );

  if (loadingProducts) {
    return <>Loading Product</>;
  }

  const filteredProductList: ProductType[] = products.filter(
    (product: ProductType) =>
      !selectedOption || product.size.includes(selectedOption)
  );

  return (
    <StyledProductSection>
      {filteredProductList.length === 0
        ? 'No result, please change filter size selected'
        : filteredProductList.map((item: ProductType) => (
            <Product key={'product-' + item.index} {...item}></Product>
          ))}
    </StyledProductSection>
  );
};

export default ProductList;
