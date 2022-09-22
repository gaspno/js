const leftMovie = document.getElementById("left-autocomplete");
const summary_left = document.getElementById("left-summary");
const rightMovie = document.getElementById("right-autocomplete");
const summary_right = document.getElementById("right-summary");

const arguments = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `<img src="${imgSrc}" /> 
<h1>${movie.Title} <b>Year :(${movie.Year})<b/></h1>`;
  },
  onOptionSelect(baseUrl, movie, summary) {
    onMovieSelect(baseUrl, movie, summary);
  },
  InputValue(movie) {
    return movie.Title;
  },
  fetchDataMovie: fetchData,
};

createAutoComplete({
  root: leftMovie,
  ...arguments,
  summary: summary_left,
});

createAutoComplete({
  root: rightMovie,
  ...arguments,
  summary: summary_right,
});
