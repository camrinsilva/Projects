let addBtn = document.querySelector('.add');
let deleteBtn = document.querySelector('.delete');

function addItem() {
  if(document.querySelector('.item-input input').value.length == 0 || document.querySelector('.price-input input').value.length == 0) {
    alert('Please Enter an item and a price')
  } else if(isNaN(parseFloat(document.querySelector('.price-input input').value))) {
    return alert('Please enter a number for the price');
  } else {
    document.querySelector('.shopping-list').innerHTML += `
          <div class="list-container">
        <p id="item-input">Item: ${document.querySelector('.item-input input').value}</p>
        <p id="price-input">Price: ${'$' +document.querySelector('.price-input input').value}</p>
        <button class="delete btn"><i class="fa-solid fa-trash"></i></button>
      </div>`
  }

  document.querySelector('.item-input input').value = '';
  document.querySelector('.price-input input').value = '';
}

addBtn.addEventListener('click', function() {
  addItem();
});

document.querySelector('.price-input input').addEventListener('keypress', function(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    addItem();
  }
});

document.querySelector('.shopping-list').addEventListener('click', function(event) {
  if(event.target.classList.contains('delete') || event.target.closest('.delete')) {
    let element = document.querySelector('.list-container');
    element.remove();
  }
});


