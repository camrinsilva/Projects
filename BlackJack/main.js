let deck;
let hidden;
let hiddenCardImg;

let playerScore = 0;
let dealerScore = 0;

let playerSum = document.querySelector('.player-sum');
let dealerSum = document.querySelector('.dealer-sum');

let playerAceCount = 0;
let dealerAceCount = 0;

let canHit = true;

function startGame() {
  document.querySelector('.player-cards').innerHTML = '';
  document.querySelector('.results').textContent = '';
  document.querySelector('.dealer-cards').innerHTML = '';


  playerAceCount = 0;
  playerScore = 0;
  dealerAceCount = 0;
  dealerScore = 0;
  canHit = true;

  buildDeck();
  shuffleDeck();

  hidden = deck.pop();
  hiddenCardImg = document.createElement('img');
  hiddenCardImg.src = 'cards/BACK.png';
  hiddenCardImg.classList.add('card');
  document.querySelector('.dealer-cards').append(hiddenCardImg);

    let visibleCard = deck.pop();
    let cardImg = document.createElement('img');
    cardImg.src = 'cards/' + visibleCard + '.png';
    cardImg.classList.add('card');
    dealerScore += getValue(visibleCard);
    dealerAceCount += checkAce(visibleCard);
    document.querySelector('.dealer-cards').append(cardImg); 
    dealerSum.textContent = 'Sum: ' + dealerScore;
  

  for(let i = 0; i < 2; i++) {
    let card = deck.pop();
    let cardImg = document.createElement('img');
    cardImg.src = 'cards/' + card + '.png';
    cardImg.classList.add('card');
    playerScore += getValue(card);
    playerAceCount += checkAce(card);
    document.querySelector('.player-cards').append(cardImg);
  }
  playerSum.textContent = 'Sum: ' + playerScore;

}

function buildDeck() {
  let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let type = ['C', 'D', 'H', 'S'];
  deck = [];

  for(let i = 0; i < type.length; i++) {
    for(let j = 0; j < value.length; j++) {
      deck.push(value[j] + '-' + type[i]);
    }
  }
}

function shuffleDeck() {
  for(let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}


function bust() {
  canHit = false;
  document.querySelector('.results').textContent = 'You Bust!';
  document.querySelector('#play-again-overlay').classList.remove('hidden');
}

function hit() {
  if(!canHit) {
    return;
  }

  let card = deck.pop();
  let cardImg = document.createElement('img');
  cardImg.src = 'cards/' + card + '.png';
  cardImg.classList.add('card');
  playerScore += getValue(card);
  playerAceCount += checkAce(card);
  document.querySelector('.player-cards').append(cardImg); 


  playerScore = reduceAce(playerScore, playerAceCount);
  playerSum.textContent = 'Sum: ' + playerScore;
  if(playerScore > 21) {
    canHit = false;
    bust();
  }
}

function stand() {

  dealerScore += getValue(hidden);
  dealerAceCount += checkAce(hidden);
  hiddenCardImg.src = 'cards/' + hidden + '.png';


  
  while( dealerScore < 17) {
    let visibleCard = deck.pop();
    let cardImg = document.createElement('img');
    cardImg.src = 'cards/' + visibleCard + '.png';
    cardImg.classList.add('card');
    dealerScore += getValue(visibleCard);
    dealerAceCount += checkAce(visibleCard);
    document.querySelector('.dealer-cards').append(cardImg); 
    dealerSum.textContent = 'Sum: ' + dealerScore;
  }

  dealerScore = reduceAce(dealerScore, dealerAceCount);
  playerScore = reduceAce(playerScore, playerAceCount);
  canHit = false;


  let results = document.querySelector('.results');

  
  if (dealerScore > 21) {
    results.textContent = 'You Win!';
  } else if (playerScore == dealerScore) {
    results.textContent = 'Tie!';
  } else if (playerScore > dealerScore) {
    results.textContent = 'You Win!';
  } else {
    results.textContent = 'You Lose!';
  }
  
  if(playerScore > 21) {
    results.textContent = 'You Lose!';
  }else if(dealerScore > 21) {
    results.textContent = 'You Win!';
  }else if(playerScore == dealerScore) {
    results.textContent = 'Tie!';
  }else if(playerScore > dealerScore) {
    results.textContent = 'You Win!';
  }else if(playerScore < dealerScore) {
    results.textContent = 'You Lose!';
  }

  playerSum.textContent = "Sum: " + playerScore;
  dealerSum.textContent = 'Sum: ' + dealerScore;

  document.getElementById('play-again-overlay').classList.remove('hidden');
}

document.querySelector('.hit').addEventListener('click', hit);
document.querySelector('.stand').addEventListener('click', stand);
document.querySelector('.play-again-btn').addEventListener('click', function() {
  document.getElementById('play-again-overlay').classList.add('hidden');
  startGame();
});
document.querySelector('.exit-btn').addEventListener('click', function() {
  document.getElementById('play-again-overlay').classList.add('hidden');
});


function getValue(card) {
  let data = card.split('-');
  let value = data[0];

  if(isNaN(value)) {
    if(value == 'A') {
      return 11;
    }
    return 10;
  }
  return parseInt(value);
}


function checkAce(card) {
  if(card[0] == 'A') {
    return 1;
  }
  return 0;
}


function reduceAce(playerScore, playerAceCount) {
  while(playerScore > 21 && playerAceCount > 0) {
    playerScore -= 10;
    playerAceCount -= 1;
  }
  return playerScore;
}
