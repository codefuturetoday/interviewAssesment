import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const StyledFooter = styled.footer``;
const Footer = (props: Props) => {
  return <StyledFooter>{props.children}</StyledFooter>;
};

export default Footer;
