// stash.js
// The data side of Snack Stash. The stash array holds every snack,
// and the functions in this file are the only ones that change it.

let stash = [
  { name: "Trail mix", rating: 3, eaten: false },
  { name: "Sour gummies", rating: 5, eaten: true },
  { name: "Cheese crackers", rating: 4, eaten: false },
  { name: "Dark chocolate", rating: 5, eaten: false },
  { name: "Rice cakes", rating: 2, eaten: true },
];

// Add a brand new snack to the stash. New snacks start out uneaten.
function addSnack(name, rating) {
  stash.push({ name: name, rating: rating, eaten: false });
}

// Mark the snack at the given position as eaten.
function markEaten(index) {
  stash[index].eaten = true;
}

// Remove every snack from the stash.
function clearStash() {
  stash = [];
}

// Count how many snacks are still left to enjoy.
function countRemaining() {
  let count = 0;
  for (let i = 0; i < stash.length; i++) {
    count++;
  }
  return count;
}
