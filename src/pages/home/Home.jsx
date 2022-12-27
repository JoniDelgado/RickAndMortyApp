import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterContainer from "../../components/characterContainer/CharacterContainer";
import CharacterInfo from "../../components/characterInfo/CharacterInfo";
import EpisodesCard from "../../components/episodesCard/EpisodesCard";
import { getEpisodes } from "../../config/getEpisodesData";
import MatchedEpisodes from "../../matchedEpisodes/MatchedEpisodes";
import CharacterModal from "../../modals/CharacterModal";

const Home = () => {
  const [characterOne, setCharacterOne] = useState(null);
  const [characterTwo, setCharacterTwo] = useState(null);

  // SELECCIÓN DE EPISODIOS
  const [charOneEpisodes, setCharOneEpisodes] = useState([]);
  const [charTwoEpisodes, setCharTwoEpisodes] = useState([]);
  const [matchedEpisodesList, setMatchedEpisodesList] = useState([]);

  // SELECCIÓN DE PERSONAJES
  const [isOpenCharacterModal, setIsOpenCharacterModal] = useState(false);
  const [charToChoose, setCharToChoose] = useState(null);

  useEffect(() => {
    if (!characterOne) return;
    getEpisodes(characterOne).then((res) => setCharOneEpisodes(res));
  }, [characterOne]);

  useEffect(() => {
    if (!characterTwo) return;
    getEpisodes(characterTwo).then((res) => setCharTwoEpisodes(res));
  }, [characterTwo]);

  useEffect(() => {
    matchedEpisodes();
  }, [charOneEpisodes, charTwoEpisodes]);

  const matchedEpisodes = () => {
    if (!charOneEpisodes.length || !charTwoEpisodes.length) return;
    const matchedEpisodes = charOneEpisodes.filter((epiOne) => {
      return charTwoEpisodes.find((epiTwo) => epiTwo.name === epiOne.name);
    });
    setMatchedEpisodesList(matchedEpisodes);
  };

  return (
    <>
      <StyleCharInfoContainer>
        <CharacterInfo
          setIsOpenCharacterModal={setIsOpenCharacterModal}
          setCharToChoose={setCharToChoose}
          charNumber={1}
          characterToShow={characterOne}
        />
        <CharacterInfo
          setIsOpenCharacterModal={setIsOpenCharacterModal}
          setCharToChoose={setCharToChoose}
          charNumber={2}
          characterToShow={characterTwo}
        />
      </StyleCharInfoContainer>

      {/* <StyleChapterContainer>
        <EpisodesCard
          character={characterOne}
          characterEpisode={charOneEpisodes}
        />
        <MatchedEpisodes matchedEpisodesList={matchedEpisodesList} />
        <EpisodesCard
          character={characterTwo}
          characterEpisode={charTwoEpisodes}
          orientation="reverse"
        />
      </StyleChapterContainer> */}

      {isOpenCharacterModal && (
        <CharacterModal
          children={
            <CharacterContainer
              setIsOpenCharacterModal={setIsOpenCharacterModal}
              setCharacterTwo={setCharacterTwo}
              setCharacterOne={setCharacterOne}
              charToChoose={charToChoose}
            />
          }
        />
      )}
    </>
  );
};

export default Home;

const StyleCharInfoContainer = styled.div`
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyleChapterContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
