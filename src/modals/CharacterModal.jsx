import React from "react";
import reactDOM from "react-dom";
import styled from "styled-components";
import CharacterContainer from "../components/characterContainer/CharacterContainer";

const modalPath = document.getElementById("characterModal");

const CharacterModal = () => {
  return reactDOM.createPortal(
    <StyleModalContainer>
      <div>Modal par ver personajes</div>
      {/* <CharacterContainer /> */}
    </StyleModalContainer>,
    modalPath
  );
};

export default CharacterModal;

const StyleModalContainer = styled.div``;
