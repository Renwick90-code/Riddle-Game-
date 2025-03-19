// Store the riddles and answers
const riddles = [
  {
    question: "What has keys but can't open locks?",
    answer: "keyboard"
  },
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
    answer: "echo"
  },
  {
    question: "The more of this there is, the less you see. What is it?",
    answer: "darkness"
  }
];

// Initialize current riddle index
let currentRiddleIndex = 0;

// Display the first riddle when the page loads
document.getElementById('current-riddle').textContent = riddles[currentRiddleIndex].question;

// This function checks the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
  const feedback = document.getElementById('feedback');
  const hint = document.getElementById('hint');

  // Check if the user's answer is correct
  if (userAnswer === riddles[currentRiddleIndex].answer) {
    feedback.textContent = "✅ Correct! Well done! 😊";
    feedback.className = 'green'; // Green color for correct
    moveToNextRiddle(); // Proceed to the next riddle
  } else {
    feedback.textContent = "❌ Incorrect! Try again. 😞";
    feedback.className = 'red'; // Red color for incorrect answer
  }
}

// This function moves to the next riddle
function moveToNextRiddle() {
  // Wait 2 seconds before showing the next riddle
  setTimeout(() => {
    // Increase the current riddle index
    currentRiddleIndex++;

    // If there are more riddles, update the page with the next one
    if (currentRiddleIndex < riddles.length) {
      document.getElementById('current-riddle').textContent = riddles[currentRiddleIndex].question;
      document.getElementById('answer').value = ''; // Clear the input box
      document.getElementById('hint').textContent = ''; // Clear the hint text
    } else {
      // If all riddles have been solved, display a winning message
      document.getElementById('current-riddle').textContent = "Congratulations! You've solved all the riddles! 🎉";
      document.getElementById('answer').style.display = 'none'; // Hide the input box
      document.getElementById('hint').style.display = 'none'; // Hide the hint section
    }
  }, 2000); // After 2 seconds, change the riddle
}

// This function provides one letter of the correct answer
function giveHint() {
  // Display the first letter of the correct answer
  const hintLetter = riddles[currentRiddleIndex].answer.charAt(0); // Get the first letter of the answer
  document.getElementById('hint').textContent = `Hint: The answer starts with the letter "${hintLetter}".`;
}
