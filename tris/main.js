(function(){

  let round = "o";
  let clicked = [];
  const gridItems = document.querySelectorAll('.grid-item');

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
  
})();
