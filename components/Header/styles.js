import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
`;
export const HeaderText = styled.h1`
  color: black;
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 26px;
  text-align: center;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-out;
  &:hover {
    color: #9d9da2;
  }
`;
