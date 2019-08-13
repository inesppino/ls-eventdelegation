'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const btnClear = document.querySelector('.btn-clear');

function addItem(e) {
  e.preventDefault(); //prevent the page from reloading;
  const text = this.querySelector('[name=item]').value; //because it is all in the same form we can use this
  const item = {
    text,
    done: false,
  };
  items.push(item);
  printList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

//set to [] in case we forget to pass something and it won't break
//instead of using already existing variables, we put generics in case we change arrays or destinations in the html
function printList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
  }).join('');
}

function toggleDone(e) {
  const el = e.target;
  if(!el.matches('input')) return; //skip this unles it's an input
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

function clearAll() {
  itemsList.innerHTML = `<li>Loading Tapas...</li>`;
  items = [];
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btnClear.addEventListener('click', clearAll);

printList(items, itemsList);