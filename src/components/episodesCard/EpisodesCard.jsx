import React from "react";
import styled from "styled-components";

const EpisodesCard = ({
  characterEpisode,
  charNumber,
  setIsOpenEpisodeModal,
}) => {
  return (
    <>
      <StyleCardWrapper>
        <div>
          <h3>Episodios del personaje {charNumber}: </h3>
        </div>
        <div>
          {characterEpisode.map((el) => {
            return <p key={el.id}>{el.name}</p>;
          })}
        </div>
        <button onClick={() => setIsOpenEpisodeModal(false)}>Cerrar</button>
      </StyleCardWrapper>
    </>
  );
};

export default EpisodesCard;

const StyleCardWrapper = styled.div`
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  border-radius: 15px;
  background-color: white;
  overflow: scroll;

  div:first-of-type {
    padding: 1rem;
    border-radius: 15px;
    text-transform: uppercase;
    color: white;
    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);
  }

  div:last-of-type {
    padding: 1rem;
  }

  button {
    padding: 1rem;
    border: none;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;

    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);
  }
`;
