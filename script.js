function updateClock() {
    const timeElement = document.getElementById('live-time');
    const dateElement = document.getElementById('live-date');
    
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');
    
    timeElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

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

console.log("Welcome Dashboard: JavaScript initialized for 'amir-sohail' repository.");

setInterval(updateClock, 1000);
updateClock();
updateGreeting();