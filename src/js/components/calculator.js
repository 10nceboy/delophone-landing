const { debounce } = require('../utils/common');
const { watchData } = require('../utils/watch');

document.addEventListener('DOMContentLoaded', () => {
  const sumDiv = document.querySelector('calculator__sum-single');
  const sumPerMonthDiv = document.querySelector('calculator__sum-multiple');

  const oneTimeSum = 1990;
  const sumPerMonth = 0;

  const getSum = () => {
    return oneTimeSum;
  };

  const setSum = (value) => {
    sumDiv.dataset.value = value;
  };

  const getSumPerMonth = () => {
    return sumPerMonth;
  };

  const setSumPerMonth = (value) => {
    sumPerMonthDiv.dataset.value = value;
  };

  const renderResult = () => {
    sumDiv.innerText = sumDiv;
    sumPerMonthDiv.innerText = sumPerMonth;
  };

  const addSum = (sum, perMonth, multiplier = 1) => {
    setSum(getSum() + sum * multiplier);
    setSumPerMonth(getSumPerMonth() + perMonth * multiplier);
  };

  const subSum = (sum, perMonth, multiplier = 1) => {
    setSum(getSum() + sum * multiplier);
    setSumPerMonth(getSumPerMonth() + perMonth * multiplier);
  };

  watchData(sumDiv, 'value', () => {
    renderResult();
  });

  watchData(sumPerMonthDiv, 'value', () => {
    renderResult();
  });

  const getInputValue = (input) => {
    return parseInt(input.value, 10);
  };

  const setInputValue = (input, value) => {
    input.value = String(value);
  };

  const increment = (input) => {
    setInputValue(getInputValue(input) + 1);
    input.dispatchEvent(new Event('change'));
  };

  const decrement = (input) => {
    setInputValue(getInputValue(input) - 1);
    input.dispatchEvent(new Event('change'));
  };

  const onChange = function (input, prev) {
    if (getInputValue(input) > prev) {
      addSum(fixed, getInputValue(input));
      addSumPerMonth(perMonth, getInputValue(input));
    } else {
      subSum(fixed, getInputValue(input));
      subSumPerMonth(perMonth, getInputValue(input));
    }
  };

  const onChangeDebounced = debounce(onChange);

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

  document.querySelectorAll('calcalator__multiplier').forEach((multiplier) => {
    const input = multiplier.querySelector('calcaultor__input');
    const fixed = input.dataset.fixed;
    const perMonth = input.dataset.per;

    multiplier
      .querySelector('calculator__increment')
      .addEventListener('click', increment(input));
    multiplier
      .querySelector('calculator__decrement')
      .addEventListener('click', decrement(input));

    input.addEventListener('change', () => {
      onChangeDebounced(input);
    });

    input.addEventListener('keydown', () => {
      if (allowedKeys.includes(evt.key)) {
        return true;
      }
      evt.preventDefault();
    });
  });
});
