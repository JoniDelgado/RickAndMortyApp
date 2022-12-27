import React from "react";
import styled from "styled-components";

const EpisodesCard = ({ characterEpisode, charNumber }) => {
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
      </StyleCardWrapper>
    </>
  );
};

export default EpisodesCard;

const StyleCardWrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  div:first-of-type {
    padding: 1rem 0;
    border-radius: 15px;
    text-transform: uppercase;
    color: white;
    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);
  }
`;
