let playerScoreText = document.querySelector('.player-score');
let mainTitle = document.querySelector('.main-title');
let mainSubText = document.querySelector('.main-subtext');
let playerChoice = document.querySelector('.player-choice');
let computerScoreText = document.querySelector('.computer-score');
let computerChoice = document.querySelector('.computer-choice');
let modalShow = document.querySelector('.modal');
let modalResults = document.querySelector('.modal-result');
let playAgain = document.querySelector('.play-again');
let computerScore = 0;
let playerScore = 0;
let choice = 
[
  {
    name: "Rock",
    emoji:"✊"
  },

  {
    name: "Paper",
    emoji: "✋"
  },

  {
    name: "Scissors",
    emoji: "✌️"
  }
];
startGame();
setEventListeners();

function setEventListeners() {
  document.getElementById('rock').addEventListener('click', function () {
    playerChoice.textContent = "✊";
    getRandomChoice();
    checkChoice();
    checkScore();
  });
  document.getElementById('paper').addEventListener('click', function() {
    playerChoice.textContent = "✋";
    getRandomChoice();
    checkChoice();
    checkScore();
  });
  document.getElementById('scissors').addEventListener('click', function() {
    playerChoice.textContent = "✌️";
    getRandomChoice();
    checkChoice();
    checkScore();
  });


  playAgain.addEventListener("click", startGame);
}

function startGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreText.textContent = "Player:0";
  computerScoreText.textContent = "Computer:0";

  playerChoice.textContent = "?";
  computerChoice.textContent = "?";

  mainTitle.textContent = "Choose your weapon";
  mainSubText.textContent = "First to five points wins";

  modalShow.classList.remove('flex');
}

let computerEmojiChoice = {};

function getRandomChoice() {
const randomIndex = Math.floor(Math.random() * choice.length);
computerEmojiChoice = choice[randomIndex]
 computerChoice.textContent = computerEmojiChoice.emoji;
}

function checkChoice() {
  if(playerChoice.textContent == computerChoice.textContent) {
    mainTitle.textContent = "You Draw";
    mainSubText.textContent = `${computerEmojiChoice.name} cancels out ${getPlayerChoiceName(playerChoice.textContent)}`;
  } else if(playerChoice.textContent == "✊" && computerChoice.textContent == "✌️") {
    playerScore++;
    playerScoreText.textContent = "Player:" + playerScore;
    mainTitle.textContent = "You Win!";
    mainSubText.textContent = "Rock beats Scissors";
  }else if(playerChoice.textContent == "✋" && computerChoice.textContent == "✊") {
    playerScore++;
    playerScoreText.textContent = "Player:" + playerScore;
    mainTitle.textContent = "You Win!";
    mainSubText.textContent = "Paper beats Rock";
  } else if(playerChoice.textContent == "✌️" && computerChoice.textContent == "✋") {
    playerScore++;
    playerScoreText.textContent = "Player:" + playerScore;
    mainTitle.textContent = "You Win!";
    mainSubText.textContent = "Scissors beats Paper";
  }else {
    computerScore++;
    computerScoreText.textContent = "Computer:" + computerScore;
    mainTitle.textContent = "You Lose!";
    mainSubText.textContent = `${computerEmojiChoice.name} beats ${getPlayerChoiceName(playerChoice.textContent)}`;
  }
}

function getPlayerChoiceName(emoji) {
  for(let i = 0; i < choice.length; i++) {
    if(choice[i].emoji === emoji) {
      return choice[i].name
    }
  }
}

function checkScore() {
  if(playerScore === 5) {
    modalResults.textContent = "You Win!";
    modalShow.classList.add('flex');
  } else if(computerScore === 5) {
    modalResults.textContent = "You Lose!";
    modalShow.classList.add('flex');
  }
}




