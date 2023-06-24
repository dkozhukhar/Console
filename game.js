let gameInput = document.getElementById('game-input');
let gameOutput = document.getElementById('game-output');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

gameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let inputValue = e.target.value;
        e.target.value = '';
        gameOutput.innerHTML += `> ${inputValue}<br>`;
        
        attempts++;

        if (isNaN(inputValue)) {
            gameOutput.innerHTML += `Invalid input. Please enter a number.<br>`;
        } else if (parseInt(inputValue) < randomNumber) {
            gameOutput.innerHTML += 'Too low!<br>';
        } else if (parseInt(inputValue) > randomNumber) {
            gameOutput.innerHTML += 'Too high!<br>';
        } else {
            gameOutput.innerHTML += `Congratulations! You guessed the number in ${attempts} attempts.<br>`;
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
        }

        gameOutput.scrollTop = gameOutput.scrollHeight;
    }
});

gameOutput.innerHTML += 'Guess a number between 1 and 100.<br>';
