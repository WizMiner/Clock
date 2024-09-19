function displayTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    document.getElementById('clocks').textContent = timeString;
    document.getElementById('clockes').textContent = timeString;
    document.getElementById('clocked').textContent = timeString;



}

setInterval(displayTime, 1000);