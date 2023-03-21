import {
  templates,
  validationCodeMock,
  steps,
  errorMessages,
  placeholders,
  messages,
  timerTime
} from '../constants/order';
import { formatPhoneNumber } from '../utils/common';
import { resetTimer, startTimer } from '../utils/timer';
import IMask from 'imask';

let valid = false;

const renderTimer = (timerTime) => {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  const timerMinutes = document.querySelector('.minutes');
  const timerSeconds = document.querySelector('.seconds');

  timerMinutes.textContent = `${minutes} мин`;
  timerSeconds.textContent =
    seconds < 10 ? `0${seconds} сек` : `${seconds} сек`;

  if (timerTime <= 0) {
    validationReset.textContent = messages.timerEndsMessage;
    validationReset.classList.add('order__validation-reset_active');
    resetTimer();
  }
};

const maskOptions = {
  mask: '{8}(000)000-00-00',
  lazy: true,
  overwrite: true,
  prepare: (value) => value,
  commit: (value) => value === phoneInput.value
};

const phoneInput = document.querySelector('.order__phone-input');
const phoneMask = IMask(phoneInput, maskOptions);
const submitButton = document.querySelector('.order__submit-button');
const sms = document.querySelector('#sms');
const payButton = document.querySelector('.order__pay-button');
const note = document.querySelector('.order__pay-note');
const smsNote = document.querySelector('.order__sms-note');
const validationReset = document.querySelector('.order__validation-reset');

smsNote.textContent = errorMessages.phone;

let clickCount = 0;

payButton.addEventListener('click', () => {
  if (!valid) {
    note.classList.add('order__pay-note_active');
    clickCount++;
    if (clickCount > 1) {
      note.classList.add('order__pay-note_animated');
      window.setTimeout(() => {
        note.classList.remove('order__pay-note_animated');
      }, 150);
    }
  }
});

const renderChangeButton = () => {
  return `<button type = "button" class="button button_no-border button_transparent order__change-phone-button">
  Изменить
</button>`;
};

let step = steps.sendPhone;
submitButton.addEventListener('click', () => {
  let nextStep = step;
  if (step === steps.sendPhone && phoneInput.value.trim().length === 15) {
    const newValue = formatPhoneNumber(phoneInput.value.trim());
    phoneInput.placeholder = placeholders.smsCodePlaceholder;
    sms.innerHTML = `${
      messages.smsSendMessage
    }&nbsp;${newValue}&nbsp;${renderChangeButton()}`;
    validationReset.classList.add('order__validation-reset_visible');
    phoneMask.updateOptions({
      mask: Number
    });
    phoneInput.classList.add('order__sms');
    phoneInput.value = '';
    phoneMask.updateValue();
    renderTimer(timerTime);
    startTimer(renderTimer);
    smsNote.classList.remove('order__pay-note_active');
    phoneInput.classList.remove('order__sms-error');
    nextStep = steps.sendSms;
  } else if (phoneInput.value.trim().length !== 15) {
    smsNote.classList.add('order__pay-note_active');
    phoneInput.classList.add('order__sms-error');
  }

  if (step == steps.sendSms && phoneInput.value.trim() === validationCodeMock) {
    valid = true;
    phoneInput.classList.remove('order__sms-error');
    smsNote.classList.remove('order__pay-note_active');
    note.classList.remove('order__pay-note_active');
    resetTimer();
    document
      .querySelector('.order__pay-button')
      .classList.remove('order__pay-button_disabled');
  } else if (
    step == steps.sendSms &&
    phoneInput.value.trim() !== validationCodeMock
  ) {
    phoneInput.classList.add('order__sms-error');
    smsNote.classList.add('order__pay-note_active');
    smsNote.textContent = errorMessages.smsCode;
  }

  step = nextStep;

  const changePhoneButton = document.querySelector(
    '.order__change-phone-button'
  );

  if (changePhoneButton) {
    changePhoneButton.addEventListener('click', () => {
      step = steps.sendPhone;
      phoneInput.placeholder = placeholders.phonePlaceholder;
      sms.innerHTML = templates.smsHTML;
      phoneMask.updateOptions({
        mask: '{8}(000)000-00-00'
      });
      phoneInput.value = '';
      phoneMask.updateValue();
      validationReset.classList.remove('order__validation-reset_visible');
      resetTimer();
      phoneInput.classList.remove('order__sms-error');
      smsNote.classList.remove('order__pay-note_active');
      smsNote.textContent = errorMessages.phone;
    });
  }
});

validationReset.addEventListener('click', () => {
  validationReset.innerHTML = templates.timerHTML;
  resetTimer();
  renderTimer(timerTime);
  startTimer(renderTimer);
});

phoneInput.addEventListener('keydown', (event) => {
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
