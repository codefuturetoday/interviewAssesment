import React from 'react';
import styled from 'styled-components';
import { Props } from './types';
const StyledMain = styled.main`
  margin: 0.5rem 0;
`;
const Main = (props: Props) => {
  return <StyledMain>{props.children}</StyledMain>;
};

export default Main;
