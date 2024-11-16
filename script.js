// Get the elements
const checkbox = document.getElementById('divStyle'); // Get the checkbox by its ID
const colorField = document.getElementById('color'); // Get the "color" input by its ID
const contentField = document.getElementById('content'); // Get the "content" input by its ID
const button = document.getElementById('actionButton'); // Get the button by its ID
const divElement = document.getElementById('targetDiv'); // Get the target div by its ID

// Handle input events for text fields
contentField.addEventListener('input', function () {
    divElement.innerText = contentField.value; // Update div content with input value
});

// Handle changes in the checkbox
checkbox.addEventListener('change', function () {
    const color = colorField.value || '#ffffff'; // Use the color input value or default to white
    divElement.style.backgroundColor = color; // Change the background color of the div
});

// Handle button click to remove the div
button.addEventListener('click', function () {
    divElement.remove(); // Remove the div element from the page
});
