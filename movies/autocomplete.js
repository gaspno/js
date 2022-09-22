const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  InputValue,
  fetchDataMovie,
  summary,
}) => {
  //
  const labelEl = document.createElement("label");
  labelEl.innerHTML = "<b>Search for a Movie</b>";
  const inputEl = document.createElement("input");
  inputEl.classList.add("input");
  //
  const dropdownDiv = document.createElement("div");
  const dropdownMenuDiv = document.createElement("div");
  const dropdownContentDiv = document.createElement("div");
  //
  dropdownContentDiv.classList.add("dropdown-content", "results");
  dropdownMenuDiv.classList.add("dropdown-menu");
  dropdownDiv.classList.add("dropdown");
  //
  dropdownDiv.style.display = "flex";
  dropdownDiv.style.flexDirection = "column";
  //
  dropdownMenuDiv.appendChild(dropdownContentDiv);
  dropdownDiv.appendChild(dropdownMenuDiv);
  //
  root.appendChild(labelEl);
  root.appendChild(inputEl);
  root.appendChild(dropdownDiv);
  //
  const divMovies = root.querySelector(".results");
  const dropdown = root.querySelector(".dropdown");
  const input = root.querySelector(".input");

  const onInput = async (e) => {
    const items = await fetchDataMovie(
      "http://www.omdbapi.com",
      e.target.value
    );
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    items.forEach((movie) => {
      const option = document.createElement("a");
      option.innerHTML = renderOption(movie);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = InputValue(movie);
        onOptionSelect("http://www.omdbapi.com", movie, summary);
      });
      option.classList.add("dropdown-item");
      divMovies.appendChild(option);
    });
    dropdown.classList.add("is-active");
  };
  input.addEventListener("input", debounce(onInput, 2000));
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
