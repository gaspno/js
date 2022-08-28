const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "13f022d",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

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

const input = document.querySelector("input");
let timeOutId;
const onInput = (e) => {
  fetchData(e.target.value);
};

input.addEventListener("input", debounce(onInput, 2000));
