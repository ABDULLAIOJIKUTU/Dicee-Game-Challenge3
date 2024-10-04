"use strict";

// Create a reference to the img1 and img2 elements
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const resultText = document.querySelector("h1");

// Function to roll the dice
function rollDice() {
  // Generate a random number between 1 and 6 for both dice
  const rand1 = Math.floor(Math.random() * 6) + 1;
  const rand2 = Math.floor(Math.random() * 6) + 1;

  // Build the URL of the first and second dice image using the random numbers
  img1.src = `./images/dice${rand1}.png`;
  img2.src = `./images/dice${rand2}.png`;

  // Determine the winner and update the result text
  if (rand1 > rand2) {
    resultText.textContent = "Player 1 Wins!";
  } else if (rand2 > rand1) {
    resultText.textContent = "Player 2 Wins!";
  } else {
    resultText.textContent = "Draw!";
  }
}

// Roll the dice when the page is refreshed
rollDice();
//  instructions
// Create a reference to the img2 element

// Generate a random number between 1 and 6 for the first dice
// Generate a random number between 1 and 6 for the second dice

// Build the URL of the first dice image using the random number - ./images/dice${rand}.png ==> rand=2 ./images/dice2.png, etc.

// Build the URL of the second dice image using the random number - ./images/dice${rand}.png ==> rand=2 ./images/dice2.png, etc.

// Set the img1 src attribute to the first dice image URL

// Set the img2 src attribute to the second dice image URL

// If player 1 wins, display "Player 1 Wins!" in the h1 element, otherwise if player 2 wins, display "Player 2 Wins!" in the h1 element, otherwise display "Draw!" in the h1 element
