// Vars
const storageKeys = {
  BOOKMARKS: "bookmarks",
};

// DOM
const form = document.getElementById("main-form");
const bookmarksResults = document.getElementById("bookmarksResults");

// Functions
function saveBookmark(e) {
  // Get values
  const siteName = document.getElementById("siteName").value;
  const siteUrl = document.getElementById("siteUrl").value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl,
  };

  // Local Storage
  if (localStorage.getItem(storageKeys.BOOKMARKS) === null) {
    // Init if no existing array
    const bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem(storageKeys.BOOKMARKS, JSON.stringify(bookmarks));
  } else {
    // Get existing bookmarks
    const existingBookmarks = JSON.parse(
      localStorage.getItem(storageKeys.BOOKMARKS)
    );
    existingBookmarks.push(bookmark);
    localStorage.setItem(
      storageKeys.BOOKMARKS,
      JSON.stringify(existingBookmarks)
    );
  }

  // Clear form
  document.getElementById("main-form").reset();

  fetchBookmarks();

  // Prevent form submission
  e.preventDefault();
}

function deleteBookmark(e) {
  const url = e.target.attributes.value.value;
  const existingBookmarks = JSON.parse(
    localStorage.getItem(storageKeys.BOOKMARKS)
  );

  if (existingBookmarks !== null && existingBookmarks.length) {
    existingBookmarks.forEach(({ url: _url }, idx) => {
      if (_url === url) {
        existingBookmarks.splice(idx, 1);
      }
    });
  }
  localStorage.setItem(
    storageKeys.BOOKMARKS,
    JSON.stringify(existingBookmarks)
  );

  fetchBookmarks();
}

function fetchBookmarks() {
  const existingBookmarks = JSON.parse(
    localStorage.getItem(storageKeys.BOOKMARKS)
  );

  bookmarksResults.innerHTML = "";

  if (existingBookmarks !== null && existingBookmarks.length) {
    existingBookmarks.forEach(({ name, url }, idx) => {
      bookmarksResults.innerHTML += `
          <div class="card p-4 mb-3">
            <h3 class="m-0">
                ${name}
                <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
                <a class="btn btn-danger" id="delete-btn-${idx}" value="${url}" href="#">Delete</a>
            </h3>
          </div>
        `;
      const deleteBtn = document.querySelector(`#delete-btn-${idx}`);
      deleteBtn.addEventListener("click", deleteBookmark);
    });
  }
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please enter a valid URL");
    return false;
  }

  return true;
}

// Event listeners
form.addEventListener("submit", saveBookmark);
window.addEventListener("DOMContentLoaded", function () {
  fetchBookmarks();
});
