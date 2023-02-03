import { debounce, formatNumber } from '../utils/common';

document.addEventListener('DOMContentLoaded', () => {
  const sumDivs = document.querySelectorAll('.calculator__sum');
  const sumPerMonthDivs = document.querySelectorAll(
    '.calculator__sum-per-month'
  );

  let commonPrice = 1990;
  let commonMonthlyPrice = 0;

  const setSum = (value) => {
    commonPrice = parseInt(value, 10);
    sumDivs.forEach((sumDiv) => {
      sumDiv.textContent = formatNumber(commonPrice);
    });
  };

  const setSumPerMonth = (value) => {
    commonMonthlyPrice = parseInt(value, 10);
    sumPerMonthDivs.forEach(
      (sumPerMonthDiv) =>
        (sumPerMonthDiv.textContent = formatNumber(commonMonthlyPrice))
    );
  };

  const calcSums = (sum, perMonth) => {
    setSum(commonPrice + sum);
    setSumPerMonth(commonMonthlyPrice + perMonth);
  };

  const getInputValue = ({ textContent: value }) => {
    if (value.trim() === '') return 0;
    return parseInt(value, 10);
  };

  const setInputValue = (input, value) => {
    input.textContent = String(value);
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
    setInputValue(input, value - 1);
  };

  const updatePrices = (inputValue, input, price, monthlyPrice) => {
    const priceParenEl =
      input?.parentElement?.parentElement.querySelector('.calculator__price');

    const priceEl = priceParenEl?.querySelector('.calculator__price-fixed');
    const monthlyPriceEL = priceParenEl.querySelector(
      '.calculator__price-per-month'
    );
    const tooltip = priceParenEl.querySelector('.tooltip');

    if (inputValue > 0) {
      const formattedPrice = formatNumber(price * inputValue);
      const formattedmonthlyPrice = formatNumber(monthlyPrice * inputValue);

      priceEl.textContent = `${formattedPrice}₽ разово${
        monthlyPriceEL ? ',' : ''
      }`;
      priceParenEl.classList.remove('calculator__price_disabled');
      if (monthlyPriceEL && monthlyPrice) {
        monthlyPriceEL.textContent = `${formattedmonthlyPrice} ₽ / месяц.`;
      }
      if (tooltip) {
        tooltip.style.display = 'block';
      }
    } else {
      priceEl.textContent = 'Не выбрано';
      priceParenEl.classList.add('calculator__price_disabled');
      if (tooltip) {
        tooltip.style.display = 'none';
      }
      if (monthlyPriceEL && monthlyPrice) {
        monthlyPriceEL.textContent = '';
      }
    }
  };

  const onChange = function (input, price, monthlyPrice) {
    const inputValue = getInputValue(input);
    const prevValue = parseInt(input.prevValue, 10);
    const diff = inputValue === 0 ? -prevValue : inputValue - prevValue;
    calcSums(
      parseInt(price, 10) * diff,
      parseInt(monthlyPrice) * diff,
      inputValue * diff
    );
    input.prevValue = inputValue;
    updatePrices(inputValue, input, price, monthlyPrice);
  };

  const onChangeDebounced = debounce(onChange, 100);

  document.querySelectorAll('.calculator__multiplier').forEach((multiplier) => {
    const input = multiplier.querySelector('.calculator__input');
    const price = multiplier.dataset.price;
    const monthlyPrice = multiplier.dataset.monthlyPrice;
    const handleInputChange = () => {
      onChangeDebounced(input, price, monthlyPrice);
    };

    multiplier
      .querySelector('.calculator__increment')
      .addEventListener('click', () => increment(input));
    multiplier
      .querySelector('.calculator__decrement')
      .addEventListener('click', () => decrement(input));

    input.addEventListener('click', (event) => {
      event.preventDefault();
    });

    input.addEventListener('change', () => {
      handleInputChange(event);
    });

    input.addEventListener('keydown', (event) => {
      event.preventDefault();
    });

    input.addEventListener('paste', (e) => e.preventDefault());
  });
});
