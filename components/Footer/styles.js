import styled from 'styled-components';
import { mediaQueries, colors } from '../../theme';

export const FooterContainer = styled.footer`
  background-color: white;
  font-size: 12px;
  width: 335px;
  max-width: 100%;
  color: ${colors.grey};

  ${mediaQueries.tabletPortraitUp`
    width: 500px;
  `}

  ${mediaQueries.tabletLandscapeUp`
    width: 100%;
    order: 1
  `}
`;

export const Dot = styled.div`
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

export const FooterLink = styled.a`
  color: ${colors.grey};
`;
