// Constants
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1,
};

// Total stars
const starsTotal = 5;

// Run get ratings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// Init product
let product;

// Event listeners
productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  // Enable rating
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", (e) => {
  const rating = e.target.value;

  if (rating < 0 || rating > 5) {
    alert("Please rate 1 - 5");
    return;
  }

  // Change rating
  ratings[product] = rating;

  getRatings();
});

// Get ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of starts-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;

    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
