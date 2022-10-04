/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FooterContainer, Dot, LineBreak } from './styles';

const Footer = () => (
  <FooterContainer>
    © {new Date().getFullYear()} Sarah Anne Barlow, all rights reserved
    <Dot>&nbsp; • &nbsp;</Dot>
    <LineBreak />
    Built by{' '}
    <a
      style={{ color: '#7a7a7a' }}
      href='http://www.tomkeogh.co.uk/'
      target='_blank'
      rel='noopener noreferrer'
    >
      tjk3o
    </a>
  </FooterContainer>
);

export default Footer;
