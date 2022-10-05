/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FooterContainer, Dot, LineBreak, FooterLink } from './styles';

const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Sarah Anne Barlow, all rights reserved
    <Dot>&nbsp; • &nbsp;</Dot>
    <LineBreak />
    Built by{' '}
    <FooterLink
      href='http://www.tomkeogh.co.uk/'
      target='_blank'
      rel='noopener noreferrer'
    >
      tjk3o
    </FooterLink>
  </FooterContainer>
);

export default Footer;
