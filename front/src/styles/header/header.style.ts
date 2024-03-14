import styled, { ThemeContext } from "styled-components"

export const Header = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  background-color: rgb(242 244 243 / 80%);
  z-index: 10;
`;

export const Menu = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const MenuItem = styled.span`

`;