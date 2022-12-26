export const getEpisodes = async (charData) => {
  const fetchEpisodes = await charData.episode.map(async (epi) => {
    const response = await fetch(epi);
    return await response.json();
  });
  const episodes = await Promise.all(fetchEpisodes);

  return episodes;
};
