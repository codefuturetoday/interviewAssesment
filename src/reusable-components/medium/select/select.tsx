import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const StyledSelect = styled.select`
  min-width: 8rem;
  float: right;
`;
const Select = (props: Props) => {
  return (
    <StyledSelect onChange={props.onSelect}>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
