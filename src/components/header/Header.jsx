import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyleHeaderContainer>
      <img src="./images/rickandmorty.png" alt="rick and morty logo" />
    </StyleHeaderContainer>
  );
};

export default Header;

const StyleHeaderContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;

  ul {
    list-style: none;
  }

  img {
    width: 300px;

    @media screen and (max-width: 650px) {
      width: 200px;
    }
  }
`;
