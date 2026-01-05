import styled from "styled-components";

export const StyledCart = styled.div`
  img {
    width: 50px;
    cursor: pointer;
    display: inline-block;
  }

  & > button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    position: relative;
  }

  & > button.active {
    border: 2px solid var(--red-color) !important;
  }

  & span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--red-color);
    color: var(--white-color);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
`;
