import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const NavigationContainer = styled.nav`
  display: none;
  justify-content: space-around;
  height: 26px;
  width: 630px;
  margin-bottom: 20px;

  ${mediaQueries.tabletLandscapeUp`
    display: flex;
  `}
`;

export const NavLink = styled.a`
  height: 26px;
  margin: 0;
  text-align: center;
  line-height: 26px;
  text-decoration: none;
  text-transform: uppercase;
  color: #7a7a7a;
  font-size: 13px;
  transition: all 0.2s ease-out;
  &:hover {
    color: #9d9da2;
    transform: scale(1.02);
  }
  &:visited {
    color: #7a7a7a;
  }

  ${({ open }) => open && 'color: black !important;'}
`;

export const NavAnchor = styled.a`
  &:hover {
    color: #9d9da2;
    transform: scale(1.02);
  }
`;
