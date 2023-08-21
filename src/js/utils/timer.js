let timerInterval = null;
let timerTime = 20;

export const startTimer = (callback) => {
  timerInterval = setInterval(() => {
    timerTime--;
    callback(timerTime);
  }, 1000);
};

export const resetTimer = () => {
  clearInterval(timerInterval);
  timerTime = 20;
};
