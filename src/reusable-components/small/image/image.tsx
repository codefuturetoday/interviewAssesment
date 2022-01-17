import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/codeTestSprite.jpg';
import { Props } from './types';
const StyledImage = styled.img`
  height: 16rem;
  width: 15rem;
  background: url(${img}) ${(props: { cordinates: string }) => props.cordinates};
`;
const Image = (props: Props) => {
  const { imageId } = props;
  const x = -(((imageId - 1) % 8) % 4) * 20.6 + -4;
  const y = (imageId % 8 > 4 ? 1 : 0) * 16;
  const cordinates = ' ' + x + 'rem ' + y + 'rem';
  return <StyledImage cordinates={cordinates}>{props.children}</StyledImage>;
};

export default Image;
