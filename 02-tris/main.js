let round = "o";
let clicked = [];
let oClicked = [];
let xClicked = [];
let winCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [3,5,7],
];

const gridItems = document.querySelectorAll('.grid-item');
const resetButton = document.querySelector('.reset');

const checkWin = (targetArray) => {
  let win = false;
  for(let i = 0; i < winCombinations.length; i++) {
    const combination = winCombinations[i];
    const val1 = targetArray.includes(combination[0]);
    const val2 = targetArray.includes(combination[1]);
    const val3 = targetArray.includes(combination[2]);
    if (val1 && val2 && val3) {
      win = true;
      break
    }
  }
  return win;
}

const resetgame = () => {
  round = "o";
  gridItems.forEach(item => {
    item.classList.remove('o', 'x');
  });
  clicked = [];
  oClicked = [];
  xClicked = [];
}

const printWinner = (winner) => {
  let countdown = 5;
  const winnerParagraph = document.querySelector('.winner');
  winnerParagraph.innerHTML = `The winner is ${winner}! The game will restart in ${countdown} seconds`;
  const interval = setInterval(() => {
    winnerParagraph.innerHTML = `The winner is ${winner}! The game will restart in ${countdown} seconds`;
    countdown--;
    if (countdown < 0) {
      clearInterval(interval);
      resetgame();
      cleanWinner();
    }
  }, 1000);
}

const cleanWinner = () => {
  const winnerParagraph = document.querySelector('.winner');
  winnerParagraph.innerHTML = "";
}


(function(){
  gridItems.forEach(item => {
    item.addEventListener('click', e => {
      if (!clicked.includes(e.target.getAttribute('data-cell'))) {
        item.classList.add(round);
        
        if (round === "o") {
          oClicked.push(parseInt(e.target.getAttribute('data-cell')));
          if (checkWin(oClicked)) {
            printWinner("O");
          }
          round = "x";
        } else {
          xClicked.push(parseInt(e.target.getAttribute('data-cell')));
          if (checkWin(xClicked)) {
            printWinner("X");
          }
          round = "o";
        }
        
        clicked.push(e.target.getAttribute('data-cell'));
      }
    });
  });

  
  resetButton.addEventListener('click', () => {
    resetgame();
    cleanWinner();
  });

})();