export const codeHTML = `Код действителен ещё&nbsp;<span class="timer">
    <span class="minutes"></span>&nbsp;<span class="seconds"></span></span>`;

export const validationCodeMock = '363363';

export const timerTime = 180;

export const steps = { sendPhone: 'send-phone', sendSms: 'send-sms' };

export const errorMessages = {
  phone: 'Вы ввели неверный номер телефона',
  smsCode: 'Вы ввели неверный код. Попробуйте еще раз'
};

export const placeholders = {
  phonePlaceholder: 'Введите ваш номер телефона',
  smsCodePlaceholder: 'Введите код из СМС'
};

export const messages = {
  timerEndsMessage: 'Запросить новый код',
  smsSendMessage: `Мы отправили код подтверждения на номер`
};

export const templates = {
  timerHTML: `Код действителен ещё&nbsp;<span class="timer">
    <span class="minutes"></span>&nbsp;<span class="seconds"></span></span>`,
  smsHTML: `<div
    class="order__caption order__step-content-caption order__sms-novalidated"
    id="sms"
  >
    Мы отправим смс-код подтверждения. После подтверждения номера
    вы сможете оплатить номера и перейти в личный кабинет.
  </div>`
};
