// Main function
let submitBtn = document.getElementById('submitGuess');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = 1;

submitBtn.addEventListener('click', () => {
    console.log(randomNumber);

    let numberGuessed = parseFloat(document.getElementById('guessField').value);

    if (numberGuessed === randomNumber) {
        let modal = document.querySelector('.modal');
        modal.style.display = 'block';
        let container = document.querySelector('.container').style.filter = 'blur(15px)';
        let numberOfGuesses = document.getElementById('numberOfGuesses');
        numberOfGuesses.textContent = `${guess} guesses (Answer: ${randomNumber})`;
    } else if (numberGuessed > randomNumber) {
        guess++;
        // let h1 = document.querySelector('h1').style.fontSize = '40px';
        let guessLower = document.querySelector('.guessLower').style.display = 'flex';
        let guessHigher = document.querySelector('.guessHigher').style.display = 'none';
    } else {
        guess++;
        // let h1 = document.querySelector('h1').style.fontSize = '40px';
        let guessHigher = document.querySelector('.guessHigher').style.display = 'flex';
        let guessLower = document.querySelector('.guessLower').style.display = 'none';
    }
});

// input button lightup funkcija
let guessField = document.getElementById('guessField');

guessField.addEventListener('input', () => {
    submitBtn.style.color = '#000';
    submitBtn.style.backgroundColor = '#FFF';
});

// resetGame button
let resetBtn = document.getElementById('resetGame').addEventListener('click', () => {
    window.location.href = 'index.html';
})

document.querySelector('form').addEventListener('click', (e) => {
    e.preventDefault();
});