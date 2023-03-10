import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterContainer from "../../components/characterContainer/CharacterContainer";
import CharacterInfo from "../../components/characterInfo/CharacterInfo";
import EpisodeButtons from "../../components/episodesButtons/EpisodeButtons";
import EpisodesCard from "../../components/episodesCard/EpisodesCard";
import Header from "../../components/header/Header";
import { getEpisodes } from "../../config/getEpisodesData";
import MatchedEpisodes from "../../matchedEpisodes/MatchedEpisodes";
import CharacterModal from "../../modals/CharacterModal";

const Home = () => {
  // SELECCIÓN DE EPISODIOS
  const [charOneEpisodes, setCharOneEpisodes] = useState([]);
  const [charTwoEpisodes, setCharTwoEpisodes] = useState([]);
  const [matchedEpisodesList, setMatchedEpisodesList] = useState([]);

  // SELECCIÓN DE PERSONAJES
  const [characterOne, setCharacterOne] = useState(null);
  const [characterTwo, setCharacterTwo] = useState(null);
  const [charToChoose, setCharToChoose] = useState(null);

  //MANEJADOR DE MODAL
  const [isOpenCharacterModal, setIsOpenCharacterModal] = useState(false);

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
      <Header />

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

      <EpisodeButtons
        matchedEpisodesList={matchedEpisodesList}
        charOneEpisodes={charOneEpisodes}
        charTwoEpisodes={charTwoEpisodes}
      />

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
  /* background-color: white; */

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
