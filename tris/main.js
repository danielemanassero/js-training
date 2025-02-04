(function(){

  let round = "o";
  let clicked = [];
  const gridItems = document.querySelectorAll('.grid-item');
  const resetButton = document.querySelector('.reset');

  gridItems.forEach(item => {
    item.addEventListener('click', e => {
      if (!clicked.includes(e.target.getAttribute('data-cell'))) {
        item.classList.add(round);
        round = round === "o" ? "x" : "o";
        clicked.push(e.target.getAttribute('data-cell'));
        
        console.log("cell number", e.target.getAttribute('data-cell'));
      }
    });
  });

  resetButton.addEventListener('click', () => {
    round = "o";
    gridItems.forEach(item => {
      item.classList.remove('o', 'x');
    });
    clicked = [];
  });

})();
