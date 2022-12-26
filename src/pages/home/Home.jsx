import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterContainer from "../../components/characterContainer/CharacterContainer";
import EpisodesCard from "../../components/episodesCard/EpisodesCard";
import { getEpisodes } from "../../config/getEpisodesData";
import MatchedEpisodes from "../../matchedEpisodes/MatchedEpisodes";

const Home = () => {
  const [characterOne, setCharacterOne] = useState(null);
  const [characterTwo, setCharacterTwo] = useState(null);
  const [charOneEpisodes, setCharOneEpisodes] = useState([]);
  const [charTwoEpisodes, setCharTwoEpisodes] = useState([]);
  const [matchedEpisodesList, setMatchedEpisodesList] = useState([]);

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
      <StyleCharactersContainer>
        <CharacterContainer charNumber={1} setCharacterOne={setCharacterOne} />
        <CharacterContainer charNumber={2} setCharacterTwo={setCharacterTwo} />
      </StyleCharactersContainer>
      <StyleChapterContainer>
        <EpisodesCard
          character={characterOne}
          characterEpisode={charOneEpisodes}
        />
        <MatchedEpisodes matchedEpisodesList={matchedEpisodesList} />
        <EpisodesCard
          character={characterTwo}
          characterEpisode={charTwoEpisodes}
          orientation="true"
        />
      </StyleChapterContainer>
    </>
  );
};

export default Home;

const StyleCharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyleChapterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
