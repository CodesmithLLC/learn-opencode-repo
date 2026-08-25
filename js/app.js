// app.js
// The wiring of Snack Stash. This file connects the page's buttons
// to the functions in stash.js, and re-renders after every change.

const addButton = document.getElementById("add-button");
const nameInput = document.getElementById("snack-name");
const ratingSelect = document.getElementById("snack-rating");
const snackList = document.getElementById("snack-list");

// Add a snack when the Add button is clicked.
addButton.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const rating = Number(ratingSelect.value);

  if (name === "") {
    nameInput.focus();
    return;
  }

  addSnack(name, rating);
  nameInput.value = "";
  renderStash();
});

// Mark a snack eaten when its "Eaten!" button is clicked.
snackList.addEventListener("click", function (event) {
  if (event.target.className === "eaten-button") {
    const index = Number(event.target.getAttribute("data-index"));
    markEaten(index);
    renderStash();
  }
});

// Draw the page for the first time.
renderStash();
