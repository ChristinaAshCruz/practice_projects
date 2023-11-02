// create a variable for our form
const ratingForm = document.querySelector("form");
// input radio variable
const inputRadio = document.querySelectorAll('input[name="rating"]');
// rating card element variable
const ratingCard = document.querySelector("#rating-card");
// thank you card element variable
const thankYouCard = document.querySelector("#thank-you-card");
// rating selection element variable
const ratingSelectionStatement = document.querySelector("#rating-selection");

// variable to store our select rating value
let rating = 0;

inputRadio.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.value);
    // overwrite rating value to selected value
    rating = element.value;
  });
});

// set event listener to wait for submit on form
ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // alert if rating was not select/ still equates to 0
  if (rating === 0) {
    alert("Please select a rating");
  } else {
    // add hidden class to rating card class list
    ratingCard.classList.add("hidden");
    // remove hidden class to thank you card class list
    thankYouCard.classList.remove("hidden");
    //   // change innerHTML in rating statement to display selected rating value
    ratingSelectionStatement.innerHTML = rating;
  }
});
