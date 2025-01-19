

// Array of skills to cycle through
const skills = ["ML", "AI", "Fullstack Development", "Python", "Data Science"];
let index = 0;

// Function to update the text dynamically
const changeText = () => {
    const devElement = document.getElementById("dev");
    // Construct the new text
    const newText = `I am good at ${skills[index]}.`;
    devElement.textContent = newText;

    // Update the index to point to the next skill
    index = (index + 1) % skills.length;
};

// Set an interval to change the text every 3 seconds
setInterval(changeText, 1800);
