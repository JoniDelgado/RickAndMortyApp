import React from "react";
import styled from "styled-components";

const MatchedEpisodes = ({ matchedEpisodesList }) => {
  return (
    <>
      <StyleMatchesCardWrapper>
        <h2>Episodios del personaje</h2>
        {!matchedEpisodesList.length ? (
          <div>
            <h3>No hay episodios juntos</h3>
          </div>
        ) : (
          <div>
            <h3>Episodios juntos: </h3>
            {matchedEpisodesList.map((epi, ind) => {
              return <p key={ind}>{epi.name}</p>;
            })}
          </div>
        )}
      </StyleMatchesCardWrapper>
    </>
  );
};

export default MatchedEpisodes;

const StyleMatchesCardWrapper = styled.div`
  padding: 1rem;
  text-align: center;

  h2 {
    padding: 0.5rem 1rem;
    background-color: #dadada;
    border-radius: 20px 20px 0 0;
    border-bottom: thin solid gray;
  }

  div {
    padding: 1rem 0;
    border-bottom: thin solid gray;

    h3 {
      margin-bottom: 1rem;
    }
  }
`;
