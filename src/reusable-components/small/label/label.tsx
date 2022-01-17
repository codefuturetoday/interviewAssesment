import React from 'react';
import styled from 'styled-components';
import { ColorMapType, Props } from './types';
const StyledLabel = styled.label`
  background-color: ${(props) => props.color};
  color: #f1f1f1;
  display: inline-block;
  min-height: 1.125rem;
  max-height: 1.125rem;
  margin-top: 1rem;
  padding: 0.375rem 0.5rem;
  width: auto;
`;

const colorMap: ColorMapType = {
  Success: '#009A00',
  Alert: '#D25353',
};
const Label = (props: Props) => {
  return (
    <StyledLabel color={colorMap[props.labelType]}>
      {props.children}
    </StyledLabel>
  );
};

export default Label;
