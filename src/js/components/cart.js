
document.addEventListener('DOMContentLoaded', () => {
    let buyButton = document.querySelector('.cart__button-buy')
    let cartQuantity = document.querySelector('.cart__quantity')
    let QuantityNumber = document.querySelector('.cart__quantity-number')
    let choiceHeader = document.querySelector('.cart__header-choice')
    let quantity = parseInt(cartQuantity.textContent.split(" ").join(""), 10)
    let number = 'номер'
    let choice = 'Выбран'
    const declination = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];


    if (quantity == 0) {
        buyButton.disabled = true;
        choiceHeader.textContent = choice + 'о'
        QuantityNumber.textContent = number + 'ов'

    }
    else {
        if (buyButton) {
            buyButton.disabled = false;
        }
        QuantityNumber.textContent = number + declination(quantity, ['', 'а', 'ов'])
        if (quantity % 2 == 1) {
            choiceHeader.textContent = choice
        }
        else {
            choiceHeader.textContent = choice + 'о'
        }

        if (quantity == 1) buyButton.innerHTML = "Купите номер телефона"
    }

});