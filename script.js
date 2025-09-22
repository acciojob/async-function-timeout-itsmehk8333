//your JS code here. If required.
// Helper function: returns a promise that resolves after "ms" milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function to handle the button click
async function handleSubmit() {
  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "";

  // Parse delay as integer
  const delay = parseInt(delayInput);

  // Validation: both inputs required
  if (!textInput || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a non-negative delay.";
    return;
  }

  // Wait for the given delay
  await wait(delay);

  // Show message after delay
  outputDiv.textContent = textInput;
}

// Attach click event to button
document.getElementById("btn").addEventListener("click", handleSubmit);
