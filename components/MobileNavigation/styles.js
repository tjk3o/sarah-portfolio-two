import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const NavigationOptions = styled.nav`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: black;
  height: 280px;
  width: 100%;
  transition: margin-top 200ms ease-in-out;
  ${(props) => (props.open ? 'margin-top: 0px;' : 'margin-top: -280px')}
`;

export const NavLink = styled.a`
  text-decoration: none;
  background-color: black;
  color: #7a7a7a;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 100;
  height: 40px;
  margin: 0 5px;
  width: 100%;
  text-align: center;
  line-height: 40px;
`;

export const NavButton = styled.button`
  font-weight: 100;
  font-size: 16px;
  color: #7a7a7a;
  text-transform: uppercase;
  width: 100%;
  padding-top: 15px;
  border: none;
  background-color: white;
  &:focus {
    outline: grey;
  }

  ${mediaQueries.tabletLandscapeUp`
  display: none;
`}
`;

export const StyledNavAnchor = styled.a`
  width: 100%;
  text-align: center;
`;
