// Predefined texts for each difficulty level
const typingTexts = {
    easy: [
        "The cat sat on the mat.",
        "A quick brown fox jumps over the lazy dog.",
        "Hello world!"
    ],
    medium: [
        "Typing is a skill that improves with practice.",
        "JavaScript is a versatile programming language.",
        "Bootstrap helps in creating responsive designs."
    ],
    hard: [
        "The quick brown fox jumps over the lazy dog while typing fast.",
        "Programming requires logical thinking and problem-solving skills.",
        "Responsive web design ensures compatibility across devices."
    ]
};

let startTime = null;
let endTime = null;

// Function to display random text based on selected difficulty
function displayRandomText() {
    const difficultySelect = document.getElementById("difficulty");
    const selectedDifficulty = difficultySelect.value;
    const textInput = document.querySelector("input[type='text']");

    // Get random text from the selected difficulty level
    const randomText = typingTexts[selectedDifficulty][Math.floor(Math.random() * typingTexts[selectedDifficulty].length)];
    
    // Display the random text in the input field
    textInput.value = randomText;
}

// Function to start the typing test
function startTest() {
    startTime = new Date(); // Record the start time
    document.getElementById("start-btn").disabled = true; // Disable the start button
    document.getElementById("stop-btn").disabled = false; // Enable the stop button
    const userInput = document.getElementById("user-input");
    userInput.disabled = false; // Enable the user-input area
    userInput.value = ""; // Clear any existing text in the user-input area
    userInput.focus(); // Focus on the user-input area
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
    document.getElementById("level").textContent = difficultySelect.value.charAt(0).toUpperCase() + difficultySelect.value.slice(1);
}

// Function to stop the typing test
function stopTest() {
    endTime = new Date(); // Record the end time
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Calculate time in seconds and round to 2 decimal points
    document.getElementById("speed").textContent = `${timeTaken}s`; // Display the time taken in the results section
    document.getElementById("stop-btn").disabled = true; // Disable the stop button
    document.getElementById("start-btn").disabled = false; // Enable the start button
    document.getElementById("user-input").disabled = true; // Disable the user-input area

    // Calculate and display WPM
    calculateWPM();
}

// Event listener for difficulty selection change
document.getElementById("difficulty").addEventListener("change", displayRandomText);

// Event listeners for start and stop buttons
document.getElementById("start-btn").addEventListener("click", startTest);
document.getElementById("stop-btn").addEventListener("click", stopTest);

// Initial text display when the page loads
window.onload = displayRandomText;