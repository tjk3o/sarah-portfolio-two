import styled from 'styled-components';
import { mediaQueries, colors } from '../../theme';

export const DetailsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 4px 4px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    'mainImage'
    'description'
    'secondImage'
    'thirdImage'
    'fourthImage';

  ${mediaQueries.tabletPortraitUp`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'mainImage mainImage mainImage'
      'description description description'
      'secondImage thirdImage fourthImage';
      
    `};

  ${mediaQueries.tabletLandscapeUp`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'mainImage mainImage mainImage secondImage'
    'mainImage mainImage mainImage thirdImage'
    'mainImage mainImage mainImage fourthImage'
    'description description description description';

  &.landscape {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'mainImage mainImage mainImage'
      'description description description'
      'secondImage thirdImage fourthImage';
  }
  &.portrait {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
    'mainImage mainImage mainImage mainImage secondImage secondImage secondImage .'
    'mainImage mainImage mainImage mainImage thirdImage fourthImage . .'
    'mainImage mainImage mainImage mainImage . . . .'
    'description description description description description description description description';
  }
  `}
`;

export const MainImageContainer = styled.div`
  position: relative;
  grid-area: mainImage;
  background: ${colors.grey};
  width: 100%;
`;

export const SecondImageContainer = styled.div`
  position: relative;
  grid-area: secondImage;
  background: ${colors.grey};
  width: 100%;
`;

export const ThirdImageContainer = styled.div`
  position: relative;
  grid-area: thirdImage;
  background: ${colors.grey};
  width: 100%;
`;

export const FourthImageContainer = styled.div`
  position: relative;
  grid-area: fourthImage;
  background: ${colors.grey};
  width: 100%;
`;

export const DetailsHeading = styled.h2`
  grid-area: description;
  font-size: 16px;
  line-height: 40px;
  ${mediaQueries.tabletPortraitUp`
    font-size: 30px;
  `}
`;

export const DetailsParagraph = styled.p`
  color: ${colors.grey};
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  a {
    color: ${colors.black};
  }
`;
