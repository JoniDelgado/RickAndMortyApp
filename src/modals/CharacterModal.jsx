import React from "react";
import reactDOM from "react-dom";
import styled from "styled-components";

const modalPath = document.getElementById("characterModal");

const CharacterModal = ({ children }) => {
  return reactDOM.createPortal(
    <StyleModalContainer>{children}</StyleModalContainer>,
    modalPath
  );
};

export default CharacterModal;

const StyleModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  background-color: #00000083;
`;
