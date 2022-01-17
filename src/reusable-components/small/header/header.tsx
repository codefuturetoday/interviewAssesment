import React from 'react';
import styled from 'styled-components';
import { Props } from './types';
const StyledHeader = styled.header`
  background-color: #def1f4;
  padding: 0.5rem;
`;
const Header = (props: Props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
