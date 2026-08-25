// render.js
// The drawing side of Snack Stash. These functions read the stash
// and update what you see on the page. They never change the data.

// Build a string of stars for a snack's rating, like "★★★".
function buildStars(rating) {
  var stars = "";
  for (var i = 0; i < rating; i++) {
    stars = stars + "★";
  }
  return stars;
}

// Update the stats line at the top of the page.
function renderStats() {
  var statsElement = document.getElementById("stats");
  statsElement.textContent =
    stash.length + " snacks logged, " + countRemaining() + " left to enjoy";
}

// Redraw the whole snack list, then refresh the stats to match.
function renderStash() {
  var listElement = document.getElementById("snack-list");
  listElement.innerHTML = "";

  for (var i = 0; i < stash.length; i++) {
    var snack = stash[i];

    var item = document.createElement("li");
    if (snack.eaten) {
      item.className = "eaten";
    }

    var nameSpan = document.createElement("span");
    nameSpan.className = "snack-name";
    nameSpan.textContent = snack.name;

    var starsSpan = document.createElement("span");
    starsSpan.className = "snack-stars";
    starsSpan.textContent = buildStars(snack.rating);

    item.appendChild(nameSpan);
    item.appendChild(starsSpan);

    if (!snack.eaten) {
      var eatenButton = document.createElement("button");
      eatenButton.className = "eaten-button";
      eatenButton.textContent = "Eaten!";
      eatenButton.setAttribute("data-index", i);
      item.appendChild(eatenButton);
    }

    listElement.appendChild(item);
  }

  renderStats();
}
