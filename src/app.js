
const usedNumbers = new Set();
let count = 0;

    const generateButton = document.getElementById('generateButton');
    const resetButton = document.getElementById('resetButton');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const getElemRand = document.getElementById('randNum');
          generateButton.addEventListener('click', generateNumber);
          resetButton.addEventListener('click', reset);

function validateRange (min, max) {
    let validator = max-min <= 0 || !Number.isInteger(max) || !Number.isInteger(min);
    if (validator) return true;
    return false
}
function randomNumber (min, max) {
    min--;
    return Math.ceil(Math.random()*(max-min)+min);
}
function getRates () {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);
    return [min, max];
}
function generateNumber (e) {
    e.preventDefault();
    const [min, max] = getRates();
    if (validateRange(min, max)) return getElemRand.innerHTML = 'Error';
    let number = randomNumber(min, max);
    while (usedNumbers.has(number) && usedNumbers.size <= (max-min)) {
        number = randomNumber(min, max);
    };
    usedNumbers.add(number);
    if (count >= (max-min+1)) {
        generateButton.disabled = true;
        return getElemRand.innerText = 'Elements are over';
    }else {
        minInput.disabled = true;
        maxInput.disabled = true;
        count++;
        return getElemRand.innerText = number;
    }
}
function reset (e) {
    e.preventDefault();
    usedNumbers.clear();
    count = 0;
    getElemRand.innerHTML = '';
    generateButton.disabled = false;
    minInput.disabled = false;
    minInput.value = '1';
    maxInput.disabled = false;
    maxInput.value = '10'
}