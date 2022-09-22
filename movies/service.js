const fetchData = async (baseUrl, searchTerm) => {
  console.log(baseUrl);
  const response = await axios.get(baseUrl, {
    params: {
      apikey: "13f022d",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};
const onMovieSelect = async (baseUrl, movie, summary) => {
  const response = await axios.get(baseUrl, {
    params: {
      apikey: "13f022d",
      i: movie.imdbID,
    },
  });
  movieTemplate(response.data, summary);
};
