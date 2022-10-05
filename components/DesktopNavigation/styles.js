import styled from 'styled-components';
import { mediaQueries, colors } from '../../theme';

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
  color: ${colors.grey};
  font-size: 13px;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${colors.grey};
    transform: scale(1.02);
  }
  &:visited {
    color: ${colors.grey};
  }

  ${({ open }) => open && `color: ${colors.black} !important;`}
`;

export const NavAnchor = styled.a`
  &:hover {
    color: ${colors.grey};
    transform: scale(1.02);
  }
`;
