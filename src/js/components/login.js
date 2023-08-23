import {
  numberInBaseMock,
  validationCodeMock,
  timerTime,
  errorMessages
} from '../constants/login';
import { formatPhoneNumber } from '../utils/common';
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

console.log(numberInBaseMock);

const renderTimer = (timerTime) => {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  const timerMinutes = document.querySelector('.minutes');
  const timerSeconds = document.querySelector('.seconds');

  timerMinutes.textContent = `${minutes} мин`;
  timerSeconds.textContent =
    seconds < 10 ? `0${seconds} сек` : `${seconds} сек`;

  if (timerTime <= 0) {
    resetTimer();
    wrongCode.classList.add('login__error_show');
    wrongCode.innerText = errorMessages.connectionCode;
    inputCodes.forEach((e) => {
      e.classList.add('login__input_error');
      e.setAttribute('disabled', '');
    });
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
  console.log(inputNumber.value);
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

const concatArr = [];

inputCodes.forEach((input, index) =>
  input.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
      concatArr[index] = event.target.value.trim();
    }

    if (concatArr.length == 4) {
      if (concatArr.join('') !== validationCodeMock) {
        document
          .querySelector('.login__error-wrong-code')
          .classList.add('login__error_show');
        inputCodes.forEach((e) => e.classList.add('login__input_error'));
      } else {
        document
          .querySelector('.login__error-wrong-code')
          .classList.remove('login__error_show');
        resetTimer();
        inputCodes.forEach((e) => e.classList.remove('login__input_error'));
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
    e.classList.remove('login__input-code_error');
    e.removeAttribute('disabled');
  });

  setTimeout(() => {
    wrongCode.innerText = errorMessages.wrongCode;
  }, 400);
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
