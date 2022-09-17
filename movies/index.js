const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "13f022d",
      i: movie.imdbID,
    },
  });
  movieTemplate(response.data);
};

const firstMovie = document.getElementById("autocomplete");
const secondMovie = document.getElementById("autocomplete2");
const thirdMovie = document.getElementById("autocomplete3");
createAutoComplete({ root: firstMovie });
createAutoComplete({ root: secondMovie });
createAutoComplete({ root: thirdMovie });

const movieTemplate = (movieDetail) => {
  console.log(movieDetail);
  const article = document.createElement("article");
  const figure = document.createElement("figure");
  const paragraph = document.createElement("p");
  const img = document.createElement("img");
  const divMediaContent = document.createElement("div");
  const divContent = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.innerHTML = movieDetail.Title;
  const h4 = document.createElement("h4");
  h4.innerHTML = movieDetail.Genre;
  const paragraphContent = document.createElement("p");
  paragraphContent.innerHTML = movieDetail.Plot;
  img.src = movieDetail.Poster;
  article.classList.add("media");
  figure.classList.add("media-left");
  paragraph.classList.add("image");
  divMediaContent.classList.add("media-content");
  divContent.classList.add("content");
  paragraph.appendChild(img);
  figure.appendChild(paragraph);
  article.appendChild(figure);
  divContent.appendChild(h1);
  divContent.appendChild(h4);
  divContent.appendChild(paragraphContent);
  divMediaContent.appendChild(divContent);
  article.appendChild(divMediaContent);
  document.getElementById("summary").appendChild(article);
  awardsDiv(movieDetail.Awards, "Awards");
  awardsDiv(movieDetail.imdbRating, "IMDB Rating");
  awardsDiv(movieDetail.BoxOffice, "Box Office");
  awardsDiv(movieDetail.Metascore, "Metascore");
  awardsDiv(movieDetail.imdbVotes, "IMDB Votes");
};
function awardsDiv(title, subtitle) {
  const article = document.createElement("article");
  article.classList.add("notification", "is-primary");
  const paragraph = document.createElement("p");
  paragraph.classList.add("title");
  paragraph.innerHTML = title;
  const paragraphSubtitle = document.createElement("p");
  paragraphSubtitle.classList.add("subtitle");
  paragraphSubtitle.innerHTML = subtitle;
  article.appendChild(paragraph);
  article.appendChild(paragraphSubtitle);

  document.getElementById("summary").appendChild(article);
}
