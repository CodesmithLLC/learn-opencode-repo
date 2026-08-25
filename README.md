# Snack Stash

A tiny snack tracker with a problem: some of it is broken, and some of it was never finished. That's on purpose. Fixing it is your job in Unit 13.

Snack Stash keeps a list of the snacks you're hoarding. You can add a snack with a star rating, mark a snack as eaten, and see your stats at the top of the page. At least, that's what it's supposed to do.

## Running the app

1. Fork this repo, then clone your fork (the Unit 13 lessons on CSX walk you through this).
2. Open the project folder in VSCode.
3. Open `index.html` in your browser. On a Mac, right-click it in Finder and choose Open With, then your browser. On Windows with WSL, run `explorer.exe .` in the integrated terminal, then double-click `index.html` in the window that opens.
4. After every change you make, save the file and refresh the browser to see the result.

No installs, no server, no build step. The browser and the refresh button are your whole test setup.

## The rules

- OpenCode stays in **Plan mode** for the whole unit. It can explain, locate, and suggest. It cannot edit.
- **You make every code change yourself.** If a change lands in a file, your hands typed it.
- This README is the source of truth for *what* to build. OpenCode helps with *where* and *why*.
- Before you change any code, be able to explain in plain English what it does now and what your change will do.

## File map

| File | Responsibility |
| --- | --- |
| `index.html` | The page itself: the header, the add-a-snack controls, the snack list, and the buttons. |
| `styles.css` | The looks. Nothing in here changes behavior. |
| `js/stash.js` | The data: the `stash` array and the functions that change it. |
| `js/render.js` | The drawing: reads the stash and updates what you see on the page. |
| `js/app.js` | The wiring: connects buttons to functions and kicks off the first render. |

## Challenge 1: The snack math is off

Open the app and look at the stats pill at the top. It says 5 snacks are left to enjoy. Now look at the list: two snacks are crossed out because they've already been eaten. Mark another snack as eaten and watch the stats. The "left to enjoy" number never goes down.

**Your goal:** make the "left to enjoy" count show the number of snacks that have not been eaten.

**Success checkpoint:** on a fresh page load, the stats read 5 snacks logged, 3 left to enjoy. When you mark a snack eaten, the number drops by one.

## Challenge 2: The Clear button does nothing

There's a "Clear the stash" button at the bottom of the list. Click it. Nothing happens.

**Your goal:** make the Clear button empty the stash.

**Success checkpoint:** clicking "Clear the stash" removes every snack from the list, and the stats read 0 snacks logged, 0 left to enjoy.

*After Challenges 1 and 2: commit your work and push it to your fork. The CSX lesson has the checkpoint.*

## Challenge 3: Show the good stuff (feature branch)

This one is a brand new feature, built on a feature branch (the CSX lesson walks you through the branch, the pull request, and the self-review).

**Your goal:** add a "5-star snacks only" button that filters the list. Clicking it shows only the snacks rated 5 stars. Clicking it again brings the whole stash back.

**Success checkpoint:** with the starter data, turning the filter on shows exactly 2 snacks (Sour gummies and Dark chocolate). Turning it off shows all 5, and adding or eating snacks still works afterward.

## You're done when

- All three success checkpoints pass in your browser.
- Your fixes for Challenges 1 and 2 are committed and pushed to your fork.
- Your Challenge 3 feature lives in a pull request on your fork, with a short summary of what changed, why, and how to verify it.
- You can explain every line you changed in plain English.
