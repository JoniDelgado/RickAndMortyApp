import React from "react";
import styled from "styled-components";

const EpisodesCard = ({ characterEpisode, character, orientation }) => {
  return (
    <>
      <StyleCardWrapper orientation={orientation}>
        <div>
          <h2>Datos de personaje</h2>
          {character && (
            <StyledCharData>
              <p>
                <strong>Nombre: </strong>
                {character.name}
              </p>
              <p>
                <strong>Estado: </strong>
                {character.status}
              </p>
              <p>
                <strong>Planeta: </strong>
                {character.location.name}
              </p>
            </StyledCharData>
          )}
        </div>
        <StyledCharData>
          <h3>Episodios del personaje: </h3>
          {characterEpisode.map((el) => {
            return <p key={el.id}>{el.name}</p>;
          })}
        </StyledCharData>
      </StyleCardWrapper>
    </>
  );
};

export default EpisodesCard;

const StyleCardWrapper = styled.div`
  padding: 1rem;
  text-align: ${({ orientation }) => (!orientation ? "start" : "end")};

  h2 {
    padding: 0.5rem 1rem;
    border-bottom: thin solid gray;
    border-radius: ${({ orientation }) =>
      !orientation ? "0 20px 0 0" : "20px 0 0 0"};
    background-color: #dddddd;
  }
`;

const StyledCharData = styled.div`
  padding: 1rem;
  border-bottom: thin solid gray;
`;
