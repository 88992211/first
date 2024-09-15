document.getElementById('startBtn').addEventListener('click', startCountdown);

function startCountdown() {
    var countdownTime = 10; // 600 seconds = 10 minutes
    var timerDisplay = document.getElementById('timer');

    // Update the timer display immediately on start
    updateTimerDisplay();

    var interval = setInterval(function() {
        countdownTime--;
        updateTimerDisplay();

        if (countdownTime <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = 'Time is up!';
        }
    }, 1000);

    function updateTimerDisplay() {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;

        // Ensure two digits for seconds display
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        timerDisplay.textContent = minutes + ':' + seconds;
    }
}
