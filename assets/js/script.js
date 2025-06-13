// Predefined texts for each difficulty level
const typingTexts = {
  easy: [
    "The cat sat on the mat.",
    "A quick brown fox jumps over the lazy dog.",
    "Hello world!",
  ],
  medium: [
    "Typing is a skill that improves with practice.",
    "JavaScript is a versatile programming language.",
    "Bootstrap helps in creating responsive designs.",
  ],
  hard: [
    "The quick brown fox jumps over the lazy dog while typing fast.",
    "Programming requires logical thinking and problem-solving skills.",
    "Responsive web design ensures compatibility across devices.",
  ],
};

let startTime = null;
let endTime = null;
const feedbackArea = document.getElementById("feedback-area");
const userInput = document.getElementById("user-input");

// Function to display random text based on selected difficulty
function displayRandomText() {
  const difficultySelect = document.getElementById("difficulty");
  const selectedDifficulty = difficultySelect.value;
  const textInput = document.querySelector("input[type='text'");

  // Reset feedback area
  feedbackArea.innerHTML = "";

  // Reset user input area so can begin again
  userInput.disabled = false; // Enable the user-input area
  userInput.value = ""; // Clear any existing text in the user-input area
  userInput.focus(); // Focus on the user-input area

  // Get random text from the selected difficulty level
  const randomText =
    typingTexts[selectedDifficulty][
      Math.floor(Math.random() * typingTexts[selectedDifficulty].length)
    ];

  // Display the random text in the input field
  textInput.value = randomText;

  // Reset timer for new game
  startTime = null;;
  endTime = null;
}

// Function to start the typing test when the user begins typing
function startTestOnTyping() {
    if (!startTime) {
    // Ensure the test starts only once
    startTime = new Date(); // Record the start time
    feedbackArea.innerHTML = ""; }// Clear the feedback area
}

// Function to stop the typing test when the user presses Enter
function stopTestOnEnter(event) {
  if (event.key === "Enter") {
    // Check if the Enter key was pressed
    if (!startTime) { // Check if the timer has started
            alert("You must start typing before stopping the test!");
            return; // Exit the function early
        }
    endTime = new Date(); // Record the end time
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Calculate time in seconds and round to 2 decimal points
    document.getElementById("speed").textContent = `${timeTaken}s`; // Display the time taken in the results section
    document.getElementById("user-input").disabled = true; // Disable the user-input area
    document.getElementById("retry-btn").disabled = false; // Enable retry button

    // Calculate and display WPM
    calculateWPM();

    // Reset timer for next game
    startTime = null;
    endTime = null;
  }
}

// Function to reset the test and results section when user presses retry
function retry() {
  displayRandomText();
  document.getElementById("retry-btn").disabled = true; // Disable retry button
  document.getElementById("level").innerText = "";
  document.getElementById("speed").innerText = "";
  document.getElementById("WPM").innerText = "";
}

// Function to calculate WPM
function calculateWPM() {
  const userInput = document.getElementById("user-input").value.trim();
  const sampleText = document.querySelector("input[type='text']").value.trim();
  const timeTakenMinutes = (endTime - startTime) / 60000; // Convert time taken to minutes

  // Split the user input and sample text into words
  const userWords = userInput.split(/\s+/);
  const sampleWords = sampleText.split(/\s+/);

  // Count correctly typed words
  let correctWords = 0;
  for (let i = 0; i < Math.min(userWords.length, sampleWords.length); i++) {
    if (userWords[i] === sampleWords[i]) {
      correctWords++;
    }
  }

  // Calculate WPM
  const wpm = Math.round(correctWords / timeTakenMinutes);

  // Display WPM and difficulty level in the Results area
  document.getElementById("WPM").textContent = wpm;
  const difficultySelect = document.getElementById("difficulty");
  document.getElementById("level").textContent =
    difficultySelect.value.charAt(0).toUpperCase() +
    difficultySelect.value.slice(1);
}

// Function to provide real-time feedback on typing accuracy
function provideTypingFeedback() {
  const userInput = document.getElementById("user-input").value.trim();
  const sampleText = document.querySelector("input[type='text']").value.trim();

  // Split the user input and sample text into words
  const userWords = userInput.split(/\s+/);
  const sampleWords = sampleText.split(/\s+/);

  // Generate feedback with color-coded words
  let feedbackHTML = "";
  for (let i = 0; i < sampleWords.length; i++) {
    if (userWords[i] === sampleWords[i]) {
      feedbackHTML += `<span class="lead" style="background-color:rgb(15, 132, 216);">${sampleWords[i]}</span> `;
    } else if (userWords[i] !== undefined) {
      feedbackHTML += `<span class="lead" style="background-color:rgb(254, 36, 7);">${sampleWords[i]}</span> `;
    } else {
      feedbackHTML += `<span>${sampleWords[i]}</span> `;
    }
  }

  // Update the feedback area with the generated HTML
  feedbackArea.innerHTML = feedbackHTML.trim();
}

// Event listener for starting the test on typing
document.getElementById("user-input").addEventListener("input", (event) => {startTestOnTyping(); provideTypingFeedback();});

// Event listener for stopping the test on pressing Enter
document.getElementById("user-input").addEventListener("keydown", stopTestOnEnter);

// Event listener for difficulty selection change
document.getElementById("difficulty").addEventListener("change", displayRandomText);// Display new random text based on selected difficulty

// Event listener for retry button
document.getElementById("retry-btn").addEventListener("click", retry);

// Event listener for instructions button to open the modal
document.getElementById("instructions-btn").addEventListener("click", () => {
    const instructionsModal = new bootstrap.Modal(document.getElementById("instructions-modal"));
    instructionsModal.show();
});``

// Initial text display when the page loads
window.onload = displayRandomText;
