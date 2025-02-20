

let deck;
let hidden;

let playerScore = 0;
let dealerScore = 0;

let playerSum = document.querySelector('.player');
let dealerSum = document.querySelector('.dealer');

let dealerAceCount = 0;
let playerAceCount = 0;

let canHit = true;

function buildDeck() {
  let value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J'];
  let type = ['C', 'D', 'H', 'S'];
  deck = [];

  for(let i = 0; i < type.length; i++) {
    for(let j = 0; j < value.length; j++) {
      deck.push(value[j] + '-' + type[i]);
    }
  }
  console.log(deck);
}

function shuffleDeck() {
  for(let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function startGame() {
  buildDeck();
  shuffleDeck();
  hidden = deck.pop();
  dealerScore += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  while (dealerScore < 17) {
    let cardImg = document.createElement('img');
    cardImg.classList.add('card')
    let card = deck.pop();
    cardImg.src = 'cards/' + card + '.png';
    dealerScore += getValue(card);
    dealerAceCount += checkAce(card);
    document.querySelector('.dealer-cards').append(cardImg);
  }


  for(let i = 0; i < 2; i++ ){
  let cardImg = document.createElement('img');
  let card = deck.pop();
  cardImg.src = 'cards/' + card + '.png';
  cardImg.classList.add('card');
  playerScore += getValue(card);
  playerAceCount += checkAce(card);
  document.querySelector('.player-cards').append(cardImg);
  }
}

function hit() {
  if(!canHit) {
    return;
  }

  let cardImg = document.createElement('img');
  let card = deck.pop();
  cardImg.src = 'cards/' + card + '.png';
  cardImg.classList.add('card');
  playerScore += getValue(card);
  playerAceCount += checkAce(card);
  document.querySelector('.player-cards').append(cardImg);

  if(reduceAce(playerScore, playerAceCount)) {
    canHit = false;
  }

  if(playerScore > 21) {
    canHit = false;
    stand();
  }
}

function stand() {
  dealerScore = reduceAce(dealerScore, dealerAceCount);
  playerScore = reduceAce(playerScore, playerAceCount);

  canHit = false;
  document.getElementById('hidden').src = 'cards/' + hidden + '.png';

  let message = '';
  if(playerScore > 21) {
    message = 'You Lose!';
  }else if( dealerScore > 21) {
    message = 'You Win!';
  }else if(playerScore == dealerScore) {
    message = 'Tie!';
  }else if(playerScore > dealerScore) {
    message = 'You Win!';
  }else if(playerScore < dealerScore) {
    message = 'You Lose!';
  }

  playerSum.textContent = 'Player:' + playerScore;
  dealerSum.textContent = 'Dealer:' + dealerScore;
  document.querySelector('.results').innerText = message;
}

document.querySelector('.hit').addEventListener('click', hit);
document.querySelector('.stand').addEventListener('click', stand);

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
  while (playerScore > 21 && playerAceCount > 0) {
    playerScore -= 10;
    playerAceCount -= 1;
  }
  return playerScore;
}