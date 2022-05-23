const game = () => {
    let pScore = 0;
    let cScore = 0;

    //* to start the game or landing page of the game----------
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');


        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });

    };

    //* Match play
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });
        //* Computer option - it basically generate a random nnumber
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //* Computer Choices
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerNumber);
                console.log(computerChoice);
                console.log(this);


                setTimeout(() => {
                    //* here we will call the computer hands
                    compareHands(this.textContent, computerChoice);
                    //* update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //* shaking the images or animating the image
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    //* update score-----------
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //* comparing the choices of each one selected.------------------
    const compareHands = (playerChoice, computerChoice) => {
        //* Update the main text display
        const winner = document.querySelector('.winner');

        //* Checking  for tie
        if (playerChoice === computerChoice) {
            winner.textContent = ' It is a Tie';
            return;
        }

        //*Checking for Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = ' Congratulation ! You Won!';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }

        //* Checking for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissor') {
                winner.textContent = ' Computer Wins !';
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Cogratulation! You Won!';
                pScore++;
                updateScore();
                return;
            }
        }

        //* Checking for Scissor
        if (playerChoice === 'scissor') {
            if (computerChoice === 'paper') {
                winner.textContent = ' Congratulation ! You Won!';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    }


    //* its call the inner function-------------
    startGame();
    playMatch();
};

//*start the game function---------

game();