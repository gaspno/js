const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "13f022d",
      s: searchTerm,
    },
  });
  return response.data.Search;
};
const divMovies = document.getElementById("target");
const input = document.querySelector("input");
let timeOutId;
const onInput = async (e) => {
  const movies = await fetchData(e.target.value);
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${movie.Poster}" /> 
    <h1>${movie.Title}</h1>`;
    divMovies.appendChild(div);
  });
};
input.addEventListener("input", debounce(onInput, 2000));
