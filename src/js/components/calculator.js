import { debounce } from '../utils/common';

document.addEventListener('DOMContentLoaded', () => {
  const sumDivs = document.querySelectorAll('.calculator__sum');
  const sumPerMonthDivs = document.querySelectorAll(
    '.calculator__sum-per-month'
  );

  let commonPrice = 1990;
  let commonMonthlyPrice = 0;

  const getSum = () => {
    return commonPrice;
  };

  const setSum = (value) => {
    commonPrice = parseInt(value, 10);
    sumDivs.forEach((sumDiv) => {
      sumDiv.textContent = commonPrice;
    });
  };

  const getSumPerMonth = () => {
    return commonMonthlyPrice;
  };

  const setSumPerMonth = (value) => {
    commonMonthlyPrice = parseInt(value, 10);

    sumPerMonthDivs.forEach(
      (sumPerMonthDiv) => (sumPerMonthDiv.textContent = commonMonthlyPrice)
    );
  };

  const addSums = (sum, perMonth, multiplier = 1) => {
    setSum(getSum() + sum * multiplier);
    setSumPerMonth(getSumPerMonth() + perMonth * multiplier);
  };

  const subSums = (sum, perMonth, multiplier = 1) => {
    setSum(getSum() - sum * (multiplier == 0 ? 1 : multiplier));
    setSumPerMonth(
      getSumPerMonth() - perMonth * (multiplier == 0 ? 1 : multiplier)
    );
  };

  const getInputValue = (input) => {
    return parseInt(input.value, 10);
  };

  const setInputValue = (input, value) => {
    input.value = String(value);
    input.dispatchEvent(new Event('change'));
  };

  const increment = (input) => {
    input.prevValue = getInputValue(input);
    setInputValue(input, getInputValue(input) + 1);
  };

  const decrement = (input) => {
    const value = getInputValue(input);
    if (value <= 0) {
      return;
    }
    input.prevValue = value;
    setInputValue(input, getInputValue(input) - 1);
    input.dispatchEvent(new Event('change'));
  };

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

  const updatePrices = (inputValue, input, price, monthlyPrice) => {
    const priceParentDiv =
      input?.parentElement?.parentElement.querySelector('.calculator__price');

    const priceDiv = priceParentDiv?.querySelector('.calculator__price-fixed');
    const monthlyPriceDiv = priceParentDiv.querySelector(
      '.calculator__price-per-month'
    );
    const tooltip = priceParentDiv.querySelector('.tooltip');

    if (inputValue > 0) {
      priceDiv.textContent = `${price * inputValue} ₽ разово${
        monthlyPriceDiv ? ',' : ''
      }`;
      priceDiv.classList.remove('calculator__price_disabled');
      if (monthlyPriceDiv && monthlyPrice) {
        monthlyPriceDiv.textContent = `${monthlyPrice} ₽ / месяц.`;
      }
      if (tooltip) {
        tooltip.style.display = 'block';
      }
    } else {
      priceDiv.textContent = 'Не выбрано';
      priceDiv.classList.add('calculator__price_disabled');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
      if (monthlyPriceDiv && monthlyPrice) {
        monthlyPriceDiv.textContent = '';
      }
    }
  };

  const onChange = function (input, price, monthlyPrice) {
    const inputValue = getInputValue(input);
    const prevValue = parseInt(input.prevValue, 10);
    if (inputValue > prevValue) {
      addSums(price, monthlyPrice, inputValue);
    } else {
      subSums(price, monthlyPrice, inputValue);
    }
    updatePrices(inputValue, input, price, monthlyPrice);
  };

  const onChangeDebounced = debounce(onChange, 100);

  document.querySelectorAll('.calculator__multiplier').forEach((multiplier) => {
    const input = multiplier.querySelector('.calculator__input');
    const price = multiplier.dataset.price;
    const monthlyPrice = multiplier.dataset.monthlyPrice;

    const handleInputChange = (event) => {
      if (event.target.value === '') {
        event.target.value = 0;
      }
      onChangeDebounced(input, price, monthlyPrice);
    };

    multiplier
      .querySelector('.calculator__increment')
      .addEventListener('mousedown', () => increment(input));
    multiplier
      .querySelector('.calculator__decrement')
      .addEventListener('mousedown', () => decrement(input));

    input.addEventListener('focus', () => {
      const inputValue = getInputValue(input);
      input.prevValue = inputValue;
      if (inputValue === 0) {
        input.value = '';
      }
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        input.value = 0;
      }
    });

    input.addEventListener('input', (event) => {
      handleInputChange(event);
    });

    input.addEventListener('change', (event) => {
      handleInputChange(event);
    });

    input.addEventListener('keydown', (event) => {
      if (allowedKeys.includes(event.key)) {
        return true;
      }
      event.preventDefault();
    });
  });
});
