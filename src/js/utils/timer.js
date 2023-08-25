let timerInterval = null;
let timerTime = 120;

export const startTimer = (callback) => {
  timerInterval = setInterval(() => {
    timerTime--;
    callback(timerTime);
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(timerInterval);
  timerTime = 120;
};
