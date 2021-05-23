
const valueEl = document.getElementById('value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');



let counterValue = 0;

const decrementClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

decrementEl.addEventListener('click', decrementClick);


const incrementClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

incrementEl.addEventListener('click',incrementClick);






