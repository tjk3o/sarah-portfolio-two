import styled from 'styled-components';
import { colors } from '../../theme';

export const HeaderContainer = styled.header`
  background-color: ${colors.white};
`;
export const HeaderText = styled.h1`
  color: ${colors.black};
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const HeaderLink = styled.div`
  text-decoration: none;
  color: ${colors.black};
  transition: all 0.2s ease-out;
  &:hover {
    color: ${colors.grey};
  }
`;
