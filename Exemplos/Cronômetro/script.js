let timer;
let timerDisplay = document.getElementById('timer');
let startPauseButton = document.getElementById('startPauseButton');
let resetButton = document.getElementById('resetButton');
let setTimeButton = document.getElementById('setTimeButton');
let originalTime = 0;
let remainingTime = 0;

startPauseButton.style.display = 'none'; // Oculta o botão "Start/Pause" inicialmente

setTimeButton.addEventListener('click', setTime);
startPauseButton.addEventListener('click', startPauseTimer);
resetButton.addEventListener('click', resetTimer); // Adiciona evento de clique ao botão "Reset"

function startPauseTimer() {
  if (!timer) {
    startTimer();
    startPauseButton.textContent = 'Pause';
  } else {
    pauseTimer();
    startPauseButton.textContent = 'Start';
  }
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    remainingTime--;
    if (remainingTime >= 0) {
      let seconds = remainingTime % 60;
      let minutes = Math.floor(remainingTime / 60);
      displayTime(minutes, seconds);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  remainingTime = originalTime; // Restaura o tempo original
  let minutes = Math.floor(originalTime / 60);
  let seconds = originalTime % 60;
  displayTime(minutes, seconds);
  startPauseButton.textContent = 'Start';
}

function setTime() {
  let userInputMinutes = prompt("Enter minutes:");
  let userInputSeconds = prompt("Enter seconds:");

  let minutes = parseInt(userInputMinutes);
  let seconds = parseInt(userInputSeconds);

  if (!isNaN(minutes) && !isNaN(seconds) && minutes >= 0 && seconds >= 0) {
    originalTime = remainingTime = minutes * 60 + seconds;
    displayTime(minutes, seconds);
    startPauseButton.style.display = 'inline'; // Exibe o botão "Start/Pause" após o tempo ser definido
  } else {
    alert("Please enter valid minutes and seconds.");
  }
}

function displayTime(minutes, seconds) {
  let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}
