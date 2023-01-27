document.addEventListener('DOMContentLoaded', () => {
  let enter = false;
  document
    .querySelector('.hero__button')
    .addEventListener('mouseover', (el) => {
      if (enter) {
        return;
      }
      enter = true;
      document.querySelector('.hero__label').textContent =
        '⚡ Сразу после регистрации';
    });

  addEventListener('mouseout', (el) => {
    enter = false;
    document.querySelector('.hero__label').textContent =
      '1 номер, 3 сотрудника, 100 ₽ на балансе';
  });
});
