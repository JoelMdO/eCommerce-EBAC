import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20dvh;
  padding: 20px 50px;
  background-color: var(--header-background);
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StyledHeaderIconMenu = styled.div`
  width: 50px;
  cursor: pointer;
  display: inline-flex;

  & > button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const StyledLogoImage = styled.img`
  width: 90px;
  height: auto;
  display: block;
`;
