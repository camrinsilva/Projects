let addButton = document.querySelector('.add-btn');
document.querySelector('input').focus();

function addTask() {
  if(document.querySelector('.input input').value.length == 0) {
    alert('Please enter a task.');
  } else {
  document.querySelector('.list-section').innerHTML += `
  <div class = 'content-container'>
    <p> ${document.querySelector('.input input').value}</p>
    <button class = 'delete-btn'><i class="fa-solid fa-trash"></i></button>
  </div> `
  }

  document.querySelector('.input input').value = '';
}

addButton.addEventListener('click', function() {
  addTask();
});

document.querySelector('input').addEventListener('keypress', function(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});


document.querySelector('.list-section').addEventListener('click', function(event) {
  if(event.target.classList.contains('delete-btn') || event.target.closest('.delete-btn')) {
 let element = document.querySelector('.content-container');
 element.remove();
  }
});