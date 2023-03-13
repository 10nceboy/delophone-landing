import { codeHTML, smsCodePlaceholder, timerEndsMessage, validationCodeMock, steps, smsSendMessage } from '../constants/orderC';
import { formatNumber, formatPhoneNumber } from '../utils/common';
import { resetTimer, startTimer } from '../utils/timer';
import IMask from 'imask';



let valid = false;

var mask


const renderTimer = (timerTime) => {

    const minutes = Math.floor(timerTime / 60);
    const seconds = timerTime % 60;
    const timerMinutes = document.querySelector('.minutes');
    const timerSeconds = document.querySelector('.seconds');

    timerMinutes.textContent = `${minutes} мин`
    timerSeconds.textContent = seconds < 10 ? `0${seconds} сек` : `${seconds} сек`;

    if (timerTime <= 0) {
        validationReset.textContent = timerEndsMessage;
        validationReset.classList.add("order__validation-reset_active")

    }
}


let cartSum = document.querySelector('.cart__summary_once')
let cartSumAbon = document.querySelector('.cart__summary_per-month')
let orderPay = document.querySelector('.order__pay-once')
let orderPayAbon = document.querySelector('.order__pay-per-month')
let orderSum = document.querySelectorAll('.order__summary')

orderPay.textContent = cartSum.textContent;
orderPayAbon.textContent = cartSumAbon.textContent;
let payed = parseInt(orderPay.textContent.split(" ").join(""), 10);
let payedAbons = parseInt(orderPayAbon.textContent.split(" ").join(""), 10);
orderSum.forEach(element => element.textContent = formatNumber(payed + payedAbons));

const phoneInput = document.querySelector('.order__phone-input')
const submitButton = document.querySelector('.order__submit-button')
const sms = document.querySelector('#sms')
const payButton = document.querySelector('.order__pay-button');
const note = document.querySelector('.order__pay-note');
const smsNote = document.querySelector('.order__sms-note');
const validationReset = document.querySelector('.order__validation-reset')

const phoneMask = IMask(
    phoneInput, {
    mask: '{8}(000)000-00-00'
});

let clickCount = 0;
payButton.addEventListener('click', () => {
    if (!valid) {
        note.classList.add('order__pay-note_active');
        clickCount++
        if (clickCount > 1) {
            note.classList.add('order__pay-note_animated')
            window.setTimeout(() => {
                note.classList.remove('order__pay-note_animated');
            }, 150);
        }
    }
});


let step = steps.sendPhone;
submitButton.addEventListener('click', () => {
    let nextStep = step;
    if (step === steps.sendPhone && phoneInput.value.trim().length >= 11) {
        const newValue = formatPhoneNumber(phoneInput.value.trim());
        phoneInput.placeholder = smsCodePlaceholder;
        sms.innerHTML = `${smsSendMessage} ${newValue}.`
        validationReset.classList.add('order__validation-reset_visible')
        phoneMask.destroy();
        phoneInput.classList.add('order__sms')
        phoneInput.value = ''
        renderTimer(180);
        startTimer(renderTimer);
        nextStep = steps.sendSms;
    }

    if (step == steps.sendSms && phoneInput.value.trim() === validationCodeMock) {
        valid = true;
        phoneInput.classList.remove('order__sms-error')
        smsNote.classList.remove('order__pay-note_active')
    }


    else if (step == steps.sendSms && phoneInput.value.trim() !== '') {
        phoneInput.classList.add('order__sms-error')
        smsNote.classList.add('order__pay-note_active')
    }
    step = nextStep;


});


validationReset.addEventListener('click', () => {
    validationReset.innerHTML = codeHTML;
    resetTimer();
    renderTimer(180);
    startTimer(renderTimer);

})


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
        '9',
    ];

    if (allowedKeys.includes(event.key)) {
        return true;
    }
    event.preventDefault();
})
