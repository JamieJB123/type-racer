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

// Event listener for difficulty selection change
document.getElementById("difficulty").addEventListener("change", displayRandomText);

// Initial text display when the page loads
window.onload = displayRandomText;