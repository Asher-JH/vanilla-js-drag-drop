// Get elements
const filterInput = document.getElementById("filterInput");
const ul = document.getElementById("names");

// Add event listerners
filterInput.addEventListener("keyup", filterNames);

function filterNames(e) {
  // Get value of input
  const filterValue = e.target.value.toUpperCase();
  // Get li's
  const li = ul.querySelectorAll("li.collection-item");
  // Loop thru
  li.forEach((item) => {
    let a = item.getElementsByTagName("a")[0];
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
