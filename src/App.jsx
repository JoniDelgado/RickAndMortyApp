import React from "react";
import styled from "styled-components";
import CharacterModal from "./modals/CharacterModal";
import Home from "./pages/home/Home";

function App() {
  return (
    <StyleAppContainer>
      <Home />
      <CharacterModal />
    </StyleAppContainer>
  );
}

export default App;

const StyleAppContainer = styled.main`
  margin: auto;
  width: 100vw;
  max-width: 1200px;
`;
