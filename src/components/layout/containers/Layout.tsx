import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Main, Select, Span, Footer } from 'ReusableComponents';
import styled from 'styled-components';
import ProductList from '../large/productList';
import { getProducts } from './productsStore/actions';

const StyledLayout = styled.div`
  margin: 2rem 7rem;
`;

const Layout = () => {
  const defaultOption = 'Filter by size';
  const [selectedOption, setSelectedOption] = useState('');
  const onSelect = (event: React.ChangeEvent) => {
    let { value } = event.target as HTMLButtonElement;
    if (value === defaultOption) {
      value = '';
    }
    setSelectedOption(value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <StyledLayout>
      <Header>
        <Span bold="bold" size="1">
          Cloth&apos;s shopping
        </Span>
        <Select
          onSelect={onSelect}
          options={[defaultOption, 'XS', 'S', 'M', 'L', 'XL', 'XXL']}
        ></Select>
      </Header>
      <Main>
        <ProductList selectedOption={selectedOption} />
      </Main>
      <Footer></Footer>
    </StyledLayout>
  );
};

export default Layout;
