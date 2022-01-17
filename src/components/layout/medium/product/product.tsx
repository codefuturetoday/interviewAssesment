import React from 'react';
import styled from 'styled-components';
import { Image, Label, Span } from 'ReusableComponents';
import { LabelConfType, Props } from './types';
const StyledProduct = styled.div`
  border: 0.01rem solid #f7f7f7;
  display: inline-block;
  padding: 0.5rem 0.5rem 0 0.5rem;
  width: 16rem;
  min-height: 22.5rem;
`;

const Product = ({
  isExclusive,
  isSale,
  price,
  productName,
  productImage,
}: Props) => {
  const labelConf: LabelConfType = isExclusive
    ? { type: 'Success', value: 'Exclusive' }
    : isSale
    ? { type: 'Alert', value: 'Sale' }
    : { type: '', value: '.' };
  const productImageId = parseInt(productImage.split('-')[1].split('.')[0]);
  return (
    <StyledProduct>
      <Image imageId={productImageId} />
      {<Label labelType={labelConf.type}>{labelConf.value}</Label>}
      <br></br>
      <div>
        <Span bold="bold" size="1.2" marginTop=".6" float="left">
          <small>{productName}</small>
        </Span>
        <Span bold="bold" size="1.5" marginTop=".6" float="right">
          {price}
        </Span>
      </div>
    </StyledProduct>
  );
};

export default Product;
