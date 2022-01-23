const fact = document.querySelector("#fact");
const factText = document.querySelector("#factText");
const numberInput = document.querySelector("#numberInput");

// function getFactAjax() {
//   const number = numberInput.value;

//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://numbersapi.com/${number}`);
//   xhr.onload = function () {
//     if (this.status === 200 && number !== "") {
//       fact.style.display = "block";
//       factText.innerHTML = this.responseText;
//     }
//   };

//   xhr.send();
// }

function getFactFetch() {
  const number = numberInput.value;

  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      if (number !== "") {
        fact.style.display = "block";
        factText.innerHTML = data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Event Listener
// numberInput.addEventListener("input", getFactAjax); // - Using AJAX
numberInput.addEventListener("input", getFactFetch); // - Using FETCH
