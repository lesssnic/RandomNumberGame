
let usedNumbers = new Set();
let count = 0;

function validateRange (min, max) {
    if (max-min <= 0) return true;
    return false
}

function randomNumber (min, max) {
    min--;
    return Math.ceil(Math.random()*(max-min)+min);
}

function getRates () {
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    return [min, max];
}

function generateNumber (e) {
    e.preventDefault();
    const [min, max] = getRates();
    if (validateRange(min, max)) return document.getElementById('randNum').innerHTML = 'Error';
    let number = randomNumber(min, max);
    while (usedNumbers.has(number) && usedNumbers.size <= (max-min)) {
        number = randomNumber(min, max);
    };
    usedNumbers.add(number);
    const getElemRand = document.getElementById('randNum');
    if (count >= (max-min+1)) {
        document.getElementById('generateButton').disabled = true;
        return getElemRand.innerText = 'Elements are over';
    }else {
        document.getElementById('min').disabled = true;
        document.getElementById('max').disabled = true;
        count++;
        return getElemRand.innerText = number;
    }
}

function reset (e) {
    e.preventDefault();
    usedNumbers.clear();
    count = 0;
    document.getElementById('randNum').innerHTML = '';
    document.getElementById('generateButton').disabled = false;
    document.getElementById('min').disabled = false;
    document.getElementById('max').disabled = false;
}