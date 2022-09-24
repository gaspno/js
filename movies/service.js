const fetchData = async (baseUrl, searchTerm) => {
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
const onMovieSelect = async (baseUrl, movie, summary, side) => {
  const response = await axios.get(baseUrl, {
    params: {
      apikey: "13f022d",
      i: movie.imdbID,
    },
  });
  movieTemplate(response.data, summary);
  if (side === "left") {
    leftMovieData = response.data;
  } else {
    rightMovieData = response.data;
  }

  if (rightMovieData && leftMovieData) {
    const left = document.querySelectorAll("#left-summary .notification");
    const right = document.querySelectorAll("#right-summary .notification");
    runComparaion(left, right);
  }
};
function runComparaion(leftSideStats, rightSideStats) {
  leftSideStats.forEach((f, index) => {
    const r = rightSideStats[index];

    if (parseInt(f.dataset.value) <= parseInt(r.dataset.value)) {
      f.classList.remove("is-primary");
      f.classList.add("is-warning");
    } else {
      r.classList.remove("is-primary");
      r.classList.add("is-warning");
    }
  });
}
