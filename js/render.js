// render.js
// The drawing side of Snack Stash. These functions read the stash
// and update what you see on the page. They never change the data.

// Build a string of stars for a snack's rating, like "★★★".
function buildStars(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars = stars + "★";
  }
  return stars;
}

// Update the stats line at the top of the page.
function renderStats() {
  const statsElement = document.getElementById("stats");
  statsElement.textContent =
    stash.length + " snacks logged, " + countRemaining() + " left to enjoy";
}

// Redraw the whole snack list, then refresh the stats to match.
function renderStash() {
  const listElement = document.getElementById("snack-list");
  listElement.innerHTML = "";

  for (let i = 0; i < stash.length; i++) {
    const snack = stash[i];

    const item = document.createElement("li");
    if (snack.eaten) {
      item.className = "eaten";
    }

    const nameSpan = document.createElement("span");
    nameSpan.className = "snack-name";
    nameSpan.textContent = snack.name;

    const starsSpan = document.createElement("span");
    starsSpan.className = "snack-stars";
    starsSpan.textContent = buildStars(snack.rating);

    item.appendChild(nameSpan);
    item.appendChild(starsSpan);

    if (!snack.eaten) {
      const eatenButton = document.createElement("button");
      eatenButton.className = "eaten-button";
      eatenButton.textContent = "Eaten!";
      eatenButton.setAttribute("data-index", i);
      item.appendChild(eatenButton);
    }

    listElement.appendChild(item);
  }

  renderStats();
}
