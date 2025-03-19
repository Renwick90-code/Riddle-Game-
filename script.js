// The correct answer for the current riddle
const correctAnswer = "keyboard"; 

// This function checks the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
  const feedback = document.getElementById('feedback');
  const hint = document.getElementById('hint');

  // Check if the user's answer is correct
  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct! Well done! 😊";
    feedback.className = 'green'; // Green color for correct
    displayNextRiddle(); // Proceed to the next riddle
  } else {
    feedback.textContent = "❌ Incorrect! Try again. 😞";
    feedback.className = 'red'; // Red color for incorrect answer
  }
}

// This function simulates moving on to the next riddle (you can customize this as needed)
function displayNextRiddle() {
  // Update the riddle to the next one (this is just an example)
  setTimeout(() => {
    document.getElementById('current-riddle').textContent = "I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?";
    document.getElementById('answer').value = ''; // Clear the input box
    document.getElementById('hint').textContent = ''; // Clear the hint text
  }, 2000); // After 2 seconds, change the riddle
}

// This function provides one letter of the correct answer
function giveHint() {
  // Display the first letter of the correct answer (can be customized to show a random letter, etc.)
  const hintLetter = correctAnswer.charAt(0); // Get the first letter of the answer
  document.getElementById('hint').textContent = `Hint: The answer starts with the letter "${hintLetter}".`;
}
