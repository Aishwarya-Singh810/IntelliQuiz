let timeLeft = 60;
const timer = setInterval(() => {
    document.getElementById('time-left').innerText = --timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('Time is up!');
        document.getElementById('quiz-form').submit();
    }
}, 1000);
