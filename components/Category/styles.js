import styled from 'styled-components';
import Image from 'next/image';
import mediaQueries from '../../theme';

export const CategoryHeading = styled.h1`
  font-size: 14px;
  color: rgb(122, 122, 122);
  width: 200px;
  line-height: 40px;

  ${mediaQueries.mobileUp`
    width: 300px;
    font-size: 18px;
  `}

  ${mediaQueries.tabletPortraitUp`
    width: 100%;
  `}
`;

export const CategoryContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px 0;
  grid-template-rows: auto;
  width: 300px;

  ${mediaQueries.tabletPortraitUp`
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 4px 4px;
  `}

  ${mediaQueries.tabletLandscapeUp`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

export const CategoryLink = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CategoryImage = styled(Image)`
  background: #7a7a7a;
`;
