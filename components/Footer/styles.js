import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const FooterContainer = styled.footer`
  background-color: white;
  font-size: 12px;
  width: 335px;
  max-width: 100%;
  color: #7a7a7a;

  ${mediaQueries.tabletPortraitUp`
    width: 500px;
  `}

  ${mediaQueries.tabletLandscapeUp`
    width: 100%;
    order: 1
  `}
`;

export const Dot = styled.span`
  display: none;
  ${mediaQueries.tabletPortraitUp`
    display: inline;
  `}
`;

export const LineBreak = styled.br`
  ${mediaQueries.tabletPortraitUp`
    display: none;
  `}
`;
