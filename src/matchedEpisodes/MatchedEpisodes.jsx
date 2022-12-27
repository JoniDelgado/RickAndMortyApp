import React from "react";
import styled from "styled-components";

const MatchedEpisodes = ({ matchedEpisodesList, setIsOpenEpisodeModal }) => {
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
            {matchedEpisodesList.map((epi, ind) => {
              return <p key={ind}>{epi.name}</p>;
            })}
          </div>
        )}
        <button onClick={() => setIsOpenEpisodeModal(false)}>Cerrar</button>
      </StyleMatchesCardWrapper>
    </>
  );
};

export default MatchedEpisodes;

const StyleMatchesCardWrapper = styled.div`
  margin-top: 4rem;
  max-height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 15px;
  overflow-y: scroll;

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
