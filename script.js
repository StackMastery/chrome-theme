function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? String(hours).padStart(2, '0') : '12'; // Adjust for '0' hour

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time').textContent = timeString; // Update time
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

const hamburger = document.getElementById('lines');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('l-active'); // Toggle active class
    menu.classList.toggle('show'); // Toggle menu visibility
});