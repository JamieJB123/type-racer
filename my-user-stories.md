## ChatGPT Generated User Stories for Typeracer:

### Start Typing Test

**User Story**

As a user, I want to easily start the typing test so that I can begin practicing right away.

**Acceptance Criteria**

- A clear “Start Test” button is visible.
- Clicking the button starts the test and displays the typing passage and input area.

**Tasks**

- Add a "Start Test" button using Bootstrap.
- Write JavaScript to show the test interface on click.
- Hide the button during the test.

### Choose Difficulty

**User Story**

As a user, I want to choose different difficulty levels so that the test matches my typing skill level.

**Acceptance Criteria**

- Users can select between at least three difficulty levels (e.g., Easy, Medium, Hard).
- Each level displays a different passage length and complexity.

**Tasks**

- Create a dropdown or buttons for difficulty selection.
- Store and load passages based on difficulty.
- Ensure selection is required before test starts.

### Display Typing Text

**User Story**

As a user, I want to see a paragraph of text to type so that I know what I need to practice.

**Acceptance Criteria**

- A clear paragraph of text appears when the test begins.
- Text is visually distinct from the input field.

**Tasks**

- Design a text display box using Bootstrap.
- Load and display the selected text on test start.
- Consider using a data structure to store multiple passages.

### Typing Input Area

As a user, I want to type into an input area so that I can complete the test directly on the page.

**User Story**

As a user, I want to easily start the typing test so that I can begin practicing right away.

**Acceptance Criteria**

- Users can type in a dedicated input area.
- The input area is separate from the display paragraph.

**Tasks**

- Add an input or textarea element.
- Style it for focus and readability.
- Clear the input area when the test starts.

### Real-Time Accuracy Feedback

**User Story**

As a user, I want to receive real-time feedback on my accuracy so that I can correct mistakes as I go.

**Acceptance Criteria**

- User input is compared to the target text in real time.
- Correct letters are highlighted in green; incorrect letters in red.
- Accuracy is visually indicated during typing.

**Tasks**

- Write JavaScript to compare user input with the expected text.
- Highlight characters based on correctness.
- Update accuracy stats dynamically.

### WPM Calculation

**User Story**

As a user, I want to see my Words Per Minute (WPM) after finishing the test so that I can measure my speed.

**Acceptance Criteria**

- WPM is displayed immediately after test completion.
- WPM is calculated using the correct formula: (correctWords / timeInMinutes).

**Tasks**

- Track test start and end time.
- Count number of correct words typed.
- Display WPM clearly on test completion.

### Retry Option

**User Story**

As a user, I want to retry the test easily so that I can keep practicing without restarting the whole app.

**Acceptance Criteria**

- A “Retry” button appears when the test ends.
- Clicking the button resets the test and clears the input field.

**Tasks**

- Add a “Retry” button visible post-test.
- Clear typing input, reset timer, and reload text when retrying.
- Optionally preserve previous score for comparison.

### Show Best Score

**User Story**

- As a user, I want to view my best score so far so that I can see my improvement over time.

**Acceptance Criteria**

- Best WPM score is saved and displayed.
- Best score persists across sessions using local storage.

**Tasks**

- Use localStorage to save and retrieve best WPM score.
- Compare current WPM to stored best and update if higher.
- Display best score in a visible area of the UI.

### Instructions for Users

**User Story**

As a user, I want to read clear instructions before taking the test so that I understand what to do.

**Acceptance Criteria**

- Simple, accessible instructions are shown before the test.
- Instructions explain how to start, type, and interpret results.

**Tasks**

- Write concise instructional content.
- Display in a modal, banner, or visible section on page load.
- Add a toggle or dismiss option for user convenience.

### Responsive Design

**User Story**

As a user, I want the app to work well on my phone, tablet, or computer so that I can practice anywhere.

**Acceptance Criteria**

- Layout adjusts to different screen sizes.
- No content is cut off or unusable on smaller devices.

**Tasks**

- Use Bootstrap’s responsive grid and flex utilities.
- Test layout on mobile, tablet, and desktop.
- Apply custom media queries if necessary for fine tuning.