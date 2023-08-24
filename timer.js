let countdownInterval;
let remainingTime = 0;

// selecting the various html elements and storing the in constants
const display = document.getElementById("timer__part");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");


//This is the start button and its starts the countdown.
startButton.addEventListener("click", startCountdown);
function startCountdown() {
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    if (!countdownInterval) {
        const hoursValue = parseInt(inputHours.value) || 0;
        const minutesValue = parseInt(inputMinutes.value) || 0;
        const secondsValue = parseInt(inputSeconds.value) || 0;

        remainingTime = hoursValue * 3600 + minutesValue * 60 + secondsValue;

        countdownInterval = setInterval(function () {
            if (remainingTime > 0) {
                remainingTime--;
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                const formatHours = formatTime(hours);
                const formatMinutes = formatTime(minutes);
                const formatSeconds = formatTime(seconds);


                display.textContent = `${formatHours}:${formatMinutes}:${formatSeconds}`;
                
                if (remainingTime === 0) {
                    playRingingSound();
                }


            } else {
                clearInterval(countdownInterval);
                countdownInterval = null;
                display.textContent = "00:00:00";
            }
        }, 1000);

    }
};

//This is the reset button and it empties the input fields.
resetButton.addEventListener("click", function () {
    clearInterval(countdownInterval);
    display.textContent = "00:00:00";
    countdownInterval = null;
    inputHours.value = "";
    inputMinutes.value = "";
    inputSeconds.value = "";
});


function playRingingSound () {
    const ringingSound = document.getElementById("ringingsound");
    ringingSound.play();
}