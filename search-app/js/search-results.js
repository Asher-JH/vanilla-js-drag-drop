export const deleteSearchResults = () => {
  const parentEl = document.getElementById("searchResults");
  let childEl = parentEl.lastElementChild;
  while (childEl) {
    parentEl.removeChild(childEl);
    childEl = parentEl.lastElementChild;
  }
};

export const buildSearchResults = (resultArr) => {
  resultArr.forEach((result) => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement("div");
    resultContents.classList.add("result-contents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
};

const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("result-item");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("result-title");
  const link = document.createElement("a");
  link.href = `https://en.wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target = "_blank";
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("result-image");
  const img = document.createElement("img");
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
};

const createResultText = (result) => {
  const resultText = document.createElement("div");
  resultText.classList.add("result-text");
  const resultDesc = document.createElement("p");
  resultDesc.classList.add("result-description");
  resultDesc.textContent = result.text;
  resultText.append(resultDesc);
  return resultText;
};

export const clearStatsLine = () => {
  document.getElementById("stats").textContent = "";
};

export const setStatsLine = (numberOfResults) => {
  const statsLine = document.getElementById("stats");
  if (numberOfResults) {
    statsLine.textContent = `Displaying ${numberOfResults} results.`;
  } else {
    statsLine.textContent = "Sorry, no results";
  }
};
