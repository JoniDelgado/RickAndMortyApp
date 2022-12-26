import React from "react";
import styled, { keyframes } from "styled-components";
import Card from "../../components/card/Card";
import useFetchRequest from "../../hooks/useFetchRequest";

const CharacterContainer = ({
  charNumber,
  setCharacterOne,
  setCharacterTwo,
}) => {
  const [isLoading, characters, setCharacters] = useFetchRequest("?page=1");

  const handleNextPage = () => {
    const { next } = characters.info;
    if (next) {
      const page = next.split("/");
      setCharacters(page[page.length - 1]);
    }
  };

  const handlePrevPage = () => {
    const { prev } = characters.info;
    if (prev) {
      const page = prev.split("/");
      setCharacters(page[page.length - 1]);
    }
  };

  return (
    <StyleCardContainer>
      <h1>Elegir personaje {charNumber}</h1>
      <div>
        {isLoading
          ? "Cargando..."
          : characters.results.map((char) => {
              return (
                <Card
                  key={char.id}
                  char={char}
                  setCharacterOne={setCharacterOne}
                  setCharacterTwo={setCharacterTwo}
                  charNumber={charNumber}
                />
              );
            })}
      </div>
      <div>
        <StyleButtons prev="true" onClick={handlePrevPage} />
        <StyleButtons onClick={handleNextPage} />
      </div>
    </StyleCardContainer>
  );
};

export default CharacterContainer;

const StyleCardContainer = styled.div`
  text-align: center;

  & > div:first-of-type {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`;

const arrowsAnim = keyframes`
0% {
  opacity: .5;
}
100% {
  opacity: .2;
}
`;

const StyleButtons = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  background-image: ${({ prev }) =>
    prev ? "url(images/prev.png)" : "url(images/next.png)"};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  animation: ${arrowsAnim} 1.5s infinite ease-out;
`;
