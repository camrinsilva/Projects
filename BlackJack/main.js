function startGame() {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random * (min - max + 1) + min);
    }

    let firstCard = getRandomNumber(2, 11);
    let secondCard =  getRandomNumber(2, 11);
    document.getElementsByClassName('cards-el').textContent = firstCard, secondCard;



  function getResults() {
    if(sum < 21) {
      console.log('Do you want to draw another card?')
    } else if(sum === 21) {
      console.log("You've got a Blackjack!")
    } else {
      console.log("You're out of the game.")
    }
  }
  getResults();
  
messageEl = document.getElementsByClassName('message-el');
messageEl.textContent = getResults()
}
