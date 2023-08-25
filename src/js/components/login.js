import {
  numberInBaseMock,
  validationCodeMock,
  timerTime,
  errorMessages
} from '../constants/login';
import { resetTimer, startTimer } from '../utils/timer';
import IMask from 'imask';

const inputNumber = document.querySelector('.login__input-number');
const inputCodes = document?.querySelectorAll('.login__input-code');
const phoneNumberSumbit = document.querySelector('.login__phone-number-submit');
const telError = document.querySelector('.login__error-no-tel');
const loader = document.querySelector('.login__loader');
const resendCodeButton = document.querySelector('.login__resend-code');
const timer = document.querySelector('.login__timer');
const waiting = document.querySelector('.login__waiting-caption');
const wrongCode = document.querySelector('.login__error-wrong-code');

const renderTimer = (timerTime) => {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  const timerMinutes = document.querySelector('.minutes');
  const timerSeconds = document.querySelector('.seconds');

  timerMinutes.textContent = minutes !== 0 ? `${minutes} мин` : '';
  timerSeconds.textContent = `${seconds} сек`;

  if (timerTime <= 0) {
    resetTimer();
  }
};

if (timer) {
  renderTimer(timerTime);
  startTimer(renderTimer);
}

const maskOptions = {
  mask: '+{7} (000) 000-00-00',
  lazy: true,
  overwrite: true,
  prepare: (value) => value,
  commit: (value) => value === inputNumber.value
};

inputNumber?.addEventListener('input', () => {
  const phoneMask = IMask(inputNumber, maskOptions);
});

let clickCount = 0;

phoneNumberSumbit?.addEventListener('click', (event) => {
  if (inputNumber.value.trim() === '') {
    event.preventDefault();
    telError.classList.add('login__error_show');
    inputNumber.classList.add('login__input_error');
    telError.innerText = errorMessages.nullNumber;
    clickCount++;
    if (clickCount > 1) {
      telError.classList.add('login__error_animated');
      window.setTimeout(() => {
        telError.classList.remove('login__error_animated');
      }, 150);
    }
  } else if (inputNumber.value.trim().length < 18) {
    event.preventDefault();
    telError.classList.add('login__error_show');
    inputNumber.classList.add('login__input_error');
    telError.innerText = errorMessages.wrongNumber;
    clickCount++;
    if (clickCount > 1) {
      telError.classList.add('login__error_animated');
      window.setTimeout(() => {
        telError.classList.remove('login__error_animated');
      }, 150);
    }
  } else if (inputNumber.value.trim().length === 18) {
    telError.classList.remove('login__error_show');
    inputNumber.classList.remove('login__input_error');
    sessionStorage.setItem('phone', inputNumber.value.trim());
  }
});

inputNumber?.addEventListener('input', () => {
  if (inputNumber.value.trim() !== '' && inputNumber.value.trim().length < 6) {
    telError.classList.remove('login__error_show');
    inputNumber.classList.remove('login__input_error');
  }

  if (inputNumber.value.trim().length === 18) {
    telError.classList.remove('login__error_show');
    inputNumber.classList.remove('login__input_error');
  }
  if (inputNumber.value.trim() == numberInBaseMock) {
    document.querySelector('.login__form_phone').action = 'login-base.html';
  } else
    document.querySelector('.login__form_phone').action = 'login-out-base.html';
});

inputNumber?.addEventListener('keydown', (event) => {
  const allowedKeys = [
    'Enter',
    'Tab',
    'Backspace',
    'Delete',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ];

  if (allowedKeys.includes(event.key)) {
    return true;
  }
  event.preventDefault();
});

inputCodes?.forEach((input) =>
  input.addEventListener('keydown', (event) => {
    const allowedKeys = [
      'Enter',
      'Backspace',
      'Delete',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ];

    if (allowedKeys.includes(event.key)) {
      return true;
    }
    event.preventDefault();
  })
);

document.addEventListener('DOMContentLoaded', () => {
  if (location.pathname.includes('base')) {
    document.querySelector('.login__number').innerText =
      sessionStorage.getItem('phone');
  }
});

inputCodes.forEach((input, index) =>
  input.addEventListener('keydown', (event) => {
    if (
      event.target.value.trim() === '' &&
      event.key == 'Backspace' &&
      index > 0
    ) {
      inputCodes[index - 1].focus();
    } else if (event.key !== 'Backspace' && index < inputCodes.length - 1) {
      const maxlength = event.currentTarget.getAttribute('maxlength');
      const length = event.currentTarget.value.length;
      if (length == maxlength) {
        inputCodes[index + 1].focus();
      }
    }
  })
);

let concatArr = [];
let attempts = 3;

inputCodes.forEach((input, index) =>
  input.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
      concatArr[index] = event.target.value.trim();
    }

    if (concatArr.length == 4) {
      const currentTimerTime = parseInt(
        document.querySelector('.seconds').innerText
      );
      if (concatArr.join('') !== validationCodeMock) {
        wrongCode.classList.add('login__error_show');
        if (attempts > 1) {
          attempts--;
          wrongCode.innerHTML = `
          Вы ввели неверный код, осталось попыток:
         <span class="login__сode-attepmts">${attempts}</span>
         </div>`;
        } else {
          wrongCode.innerText = errorMessages.noAttempts;
          resetTimer();
        }

        inputCodes.forEach((e) => {
          e.classList.add('login__input_error');
          e.value = '';
          inputCodes[0].focus();
          concatArr = [];
        });
      } else if (currentTimerTime > 0) {
        document
          .querySelector('.login__error-wrong-code')
          .classList.remove('login__error_show');
        resetTimer();
        inputCodes.forEach((e) => e.classList.remove('login__input_error'));
      } else if (currentTimerTime <= 0) {
        wrongCode.classList.add('login__error_show');
        inputCodes.forEach((e) => e.classList.add('login__input_error'));
        wrongCode.innerText = errorMessages.oldCode;
      }
    }
  })
);

resendCodeButton?.addEventListener('click', () => {
  resetTimer();
  renderTimer(timerTime);
  startTimer(renderTimer);
  wrongCode.classList.remove('login__error_show');
  inputCodes.forEach((e) => {
    e.classList.remove('login__input_error');
    e.value = null;
    inputCodes[0].focus();
  });
  attempts = 3;
});

if (loader) {
  setTimeout(() => {
    loader.classList.add('login_petal-error');
    waiting.classList.add('login__waiting-error');
    waiting.innerText = 'Ошибка связи';
    document
      .querySelector('.login__error-phone-submit')
      .classList.add('login__error_show');
  }, 5000);
}
