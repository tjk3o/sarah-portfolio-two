import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const MainContainer = styled.div`
  background-color: white;
  width: calc(100% - 10px);
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${mediaQueries.tabletPortraitUp`
    margin: 20px auto;
    width: 500px;
  `}

  ${mediaQueries.tabletLandscapeUp`
    width: 800px;
  `}
  ${mediaQueries.desktopUp`
    width: 1000px;
  `}
  ${mediaQueries.desktopLargeUp`
    width: 1200px;
  `}
`;
