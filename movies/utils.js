const debounce = (func, delay = 1000) => {
  let timeOutId;
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

//componentes
const movieTemplate = (movieDetail, summary) => {
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
  summary.appendChild(article);

  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  const awards = movieDetail.Awards.split(" ").reduce((total, word) => {
    const value = parseInt(word);
    if (isNaN(value)) {
      return total;
    } else {
      return total + value;
    }
  }, 0);

  awardsDiv(movieDetail.Awards, "Awards", summary, awards);
  awardsDiv(movieDetail.imdbRating, "IMDB Rating", summary, imdbRating);
  awardsDiv(movieDetail.BoxOffice, "Box Office", summary, dollars);
  awardsDiv(movieDetail.Metascore, "Metascore", summary, metascore);
  awardsDiv(movieDetail.imdbVotes, "IMDB Votes", summary, imdbVotes);
};
function awardsDiv(title, subtitle, summary, value) {
  const article = document.createElement("article");
  const attribute = document.createAttribute("data-value");
  attribute.value = value;
  article.setAttributeNode(attribute);
  article.classList.add("notification", "is-primary");
  const paragraph = document.createElement("p");
  paragraph.classList.add("title");
  paragraph.innerHTML = title;
  const paragraphSubtitle = document.createElement("p");
  paragraphSubtitle.classList.add("subtitle");
  paragraphSubtitle.innerHTML = subtitle;
  article.appendChild(paragraph);
  article.appendChild(paragraphSubtitle);
  summary.appendChild(article);
}
