import styled from 'styled-components';
import { mediaQueries, colors } from '../../theme';

export const AboutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 4px 4px;
  grid-template-areas:
    'mainImage'
    'mainText';
  margin-bottom: 20px;

  ${mediaQueries.tabletLandscapeUp`
    grid-template-columns: 1.2fr 0.8fr;
    grid-template-areas: 'mainImage mainText';
  gap: 40px 40px;

  `};
`;

export const AboutMainImage = styled.div`
  position relative;
  grid-area: mainImage;
  background: ${colors.grey};
  width: 100%;
  height: 300px;

  ${mediaQueries.tabletLandscapeUp`
    height: 100%;
  `};
`;

export const AboutText = styled.div`
  grid-area: mainText;
  padding: 0 50px;

  ${mediaQueries.tabletLandscapeUp`
    padding: 0;
  `};
`;

export const StyledH1 = styled.h1`
  color: ${colors.black};
  font-size: 30px;
  margin-bottom: 60px;
`;

export const StyledParagraph = styled.p`
  color: ${colors.grey};
`;

export const Signature = styled.div`
  max-width: 80px;
  ${mediaQueries.desktopUp`
    max-width: 100px;
  `}
`;
