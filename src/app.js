
let usedNumbers = new Set();
let count = 0;

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
    let number = randomNumber(min, max);
    while (usedNumbers.has(number) && usedNumbers.size <= (max-min)) {
        number = randomNumber(min, max);
    };
    usedNumbers.add(number);
    console.log(number);
    const getElemRand = document.getElementById('randNum');
    if (count >= (max-min+1)) {
        document.getElementById('generateButton').disabled = true;
        return getElemRand.innerText = 'Elements are over';
    }else {
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
}