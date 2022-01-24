import {
  setSearchFocus,
  showClearTextButton,
  clearPushListener,
  clearSearchText,
} from "./search-bar.js";
import { getSearchTerm, retrieveSearchResults } from "./data-functions.js";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from "./search-results.js";

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (e) => {
  e.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArr = await retrieveSearchResults(searchTerm);
  if (resultArr.length) buildSearchResults(resultArr);
  setStatsLine(resultArr.length);
};
