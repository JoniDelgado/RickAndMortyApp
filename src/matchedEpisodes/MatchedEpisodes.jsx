import React from "react";
import styled from "styled-components";

const MatchedEpisodes = ({ matchedEpisodesList }) => {
  return (
    <>
      <StyleMatchesCardWrapper>
        <div>
          <h3>Episodios en común</h3>
        </div>
        {!matchedEpisodesList.length ? (
          <div>
            <h4>NO HAY EPISODIOS JUNTOS</h4>
          </div>
        ) : (
          <div>
            <h4>Episodios juntos: </h4>
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
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
