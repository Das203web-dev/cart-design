//function for increasing and decreasing button and price update
function quantity(id, isIncreasing, id2, amount) {
    const quantityInput = document.getElementById(id);
    const inValue = quantityInput.value;
    if (isIncreasing == true) {
        let input = parseInt(inValue);
        inputUpdate = input + 1;
        quantityInput.value = inputUpdate;
    }
    else if (inValue > 0) {
        let input = parseInt(inValue);
        inputUpdate = input - 1;
        quantityInput.value = inputUpdate;
    }
    const priceId = document.getElementById(id2);
    const totalPrice = inputUpdate * amount;
    priceId.innerText = totalPrice;
    total();
}
//function for getting input id and price
function updatePrice(inputId, price) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const parsingInput = parseInt(inputValue);
    const inputTotal = parsingInput * price;
    return inputTotal;
}
//function for getting total price
function total() {
    const productPrice = document.getElementById('product-price');
    const shirt1 = updatePrice('input-field', 500);
    const shirt2 = updatePrice('input-field2', 450);
    const shirt3 = updatePrice('input-field3', 600);
    const totalTaka = shirt1 + shirt2 + shirt3;
    productPrice.innerText = totalTaka;
    const tax = document.getElementById('tax');
    const totalTax = totalTaka * (10 / 100);
    tax.innerText = totalTax;
    const total = document.getElementById('totalTaka');
    total.innerText = totalTaka + totalTax;
}


document.getElementById('plus-icon').addEventListener('click', function () {
    quantity('input-field', true, 'price', 500);
})
document.getElementById('minus-icon').addEventListener('click', function () {
    quantity('input-field', false, 'price', 500);
})
document.getElementById('plus-icon2').addEventListener('click', function () {
    quantity('input-field2', true, 'price2', 450);
})
document.getElementById('minus-icon2').addEventListener('click', function () {
    quantity('input-field2', false, 'price2', 450);
})
document.getElementById('plus-icon3').addEventListener('click', function () {
    quantity('input-field3', true, 'price3', 600);
})
document.getElementById('minus-icon3').addEventListener('click', function () {
    quantity('input-field3', false, 'price3', 600);
})