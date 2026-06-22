// Function to update Time and Date dynamically
function updateClock() {
    const timeElement = document.getElementById('live-time');
    const dateElement = document.getElementById('live-date');
    
    const now = new Date();
    
    // Formatting Time (HH:MM:SS AM/PM)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');
    
    timeElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    // Formatting Date (e.g., Monday, June 22, 2026)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Function to update greeting based on hours
function updateGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    const hours = new Date().getHours();
    
    if (hours < 12) {
        greetingElement.textContent = "Good Morning ☀️";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon 🌤️";
    } else {
        greetingElement.textContent = "Good Evening 🌙";
    }
}

// Add simple console console log for environment debugging
console.log("Welcome Dashboard: JavaScript initialized for 'amir-sohail' repository.");

// Triggering real-time updates
setInterval(updateClock, 1000);
updateClock();
updateGreeting();