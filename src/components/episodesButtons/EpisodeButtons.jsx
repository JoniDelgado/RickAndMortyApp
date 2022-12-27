import React, { useState } from "react";
import styled from "styled-components";
import MatchedEpisodes from "../../matchedEpisodes/MatchedEpisodes";
import CharacterModal from "../../modals/CharacterModal";
import EpisodesCard from "../episodesCard/EpisodesCard";

const EpisodeButtons = ({
  matchedEpisodesList,
  charOneEpisodes,
  charTwoEpisodes,
}) => {
  const [isOpenEpisodeModal, setIsOpenEpisodeModal] = useState(false);
  const [modalToShow, setModalToShow] = useState(null);

  const handleOpenModal = (data) => {
    if (data === "matched") {
      setModalToShow(
        <MatchedEpisodes
          matchedEpisodesList={matchedEpisodesList}
          setIsOpenEpisodeModal={setIsOpenEpisodeModal}
        />
      );
    } else if (data === "char1") {
      setModalToShow(
        <EpisodesCard
          characterEpisode={charOneEpisodes}
          setIsOpenEpisodeModal={setIsOpenEpisodeModal}
          charNumber={1}
        />
      );
    } else {
      setModalToShow(
        <EpisodesCard
          characterEpisode={charTwoEpisodes}
          setIsOpenEpisodeModal={setIsOpenEpisodeModal}
          charNumber={2}
        />
      );
    }

    setIsOpenEpisodeModal(true);
  };

  return (
    <StyleButtonsContainer>
      <button onClick={() => handleOpenModal("char1")}>
        Episodios personaje 1
      </button>
      <button className="matched" onClick={() => handleOpenModal("matched")}>
        Episodios en común
      </button>
      <button onClick={() => handleOpenModal("char2")}>
        Episodios personaje 2
      </button>

      {isOpenEpisodeModal && <CharacterModal children={modalToShow} />}
    </StyleButtonsContainer>
  );
};

export default EpisodeButtons;

const StyleButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 750px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media screen and (min-width: 440px) and (max-width: 670px) {
    .matched {
      order: 3;
    }
  }

  button {
    padding: 0.8rem;
    border: none;
    border-radius: 15px;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;

    background: #f85032;
    background: -webkit-linear-gradient(to right, #e73827, #f85032);
    background: linear-gradient(to right, #e73827, #f85032);

    @media screen and (max-width: 440px) {
      width: 75%;
    }
  }
`;
