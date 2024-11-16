// Fetch required elements
const checkbox = document.querySelector('input[type="checkbox"]'); // Task 4, Step 1
const textFields = document.getElementsByClassName('textfield'); // Task 4, Step 2
const button = document.getElementsByTagName('button')[0]; // Task 4, Step 3
const divElement = document.getElementById('targetDiv'); // Task 4, Step 4

// Function to handle input events (from Task 5)
function handleInputEvent(e) {
    console.log('Event triggered by:', e.target);

    const inputName = e.target.name;

    if (inputName === 'content') {
        divElement.innerHTML = e.target.value;
    }
}

// Add event listeners to text fields
for (let textField of textFields) {
    // Event listener for "input" events (when typing) or "blur" events (when leaving the field)
    textField.addEventListener('input', handleInputEvent);
}

// Add event listener to checkbox
checkbox.addEventListener('change', () => {
    // Get the input field with name="color" from the collection of text fields
    let colorInput = [...textFields].find(field => field.name === 'color');

    // Get the value (color) from the color input field
    const color = colorInput ? colorInput.value : '#ffffff'; // Default to white if no value is provided

    // Set the background color of the div element
    divElement.style.backgroundColor = color;
});

// Add event listener to button
button.addEventListener('click', () => {
    // Remove the div element
    divElement.remove();
});
