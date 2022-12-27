import React from "react";
import styled from "styled-components";
import Home from "./pages/home/Home";

function App() {
  return (
    <StyleAppContainer>
      <Home />
    </StyleAppContainer>
  );
}
export default App;

const StyleAppContainer = styled.main`
  margin: auto;
  max-width: 1200px;
  border: thin solid red;
`;
