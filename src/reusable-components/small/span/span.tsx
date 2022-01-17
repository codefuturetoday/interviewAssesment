import React from 'react';
import styled from 'styled-components';
import { Props } from './types';
const StyledSpan = styled.span`
  display: inline-block;
  float: ${(props: Props) => props.float};
  font-weight: ${(props: Props) => props.bold};
  font-size: ${(props: Props) => props.size + 'rem'};
  max-width: 10.5rem;
  margin-top: ${(props: Props) => props.marginTop + 'rem'};
`;
const Span = (props: Props) => {
  const { bold, float, size, marginTop } = props;
  return (
    <StyledSpan bold={bold} size={size} float={float} marginTop={marginTop}>
      {props.children}
    </StyledSpan>
  );
};

export default Span;
