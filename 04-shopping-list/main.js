const list = document.querySelector('.shoppingList');
const addItemInput = document.querySelector('#addItemInput');
const addItemButton = document.querySelector('#addItemButton');

addItemButton.addEventListener('click', addItem);


// const addItem = () => {
function addItem() {
  const item = addItemInput.value;
  
  if (item) {
    const listItem = document.createElement('li');
    const spanItem = document.createElement('span');
    const buttonDelete = document.createElement('button');

    spanItem.textContent = item;
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', () => {
      list.removeChild(listItem);
      addItemInput.focus();
    });
    
    listItem.appendChild(spanItem);
    listItem.appendChild(buttonDelete);
    list.appendChild(listItem);
    
    addItemInput.value = '';
    addItemInput.focus();
  }
};