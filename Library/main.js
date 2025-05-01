const addBtn = document.querySelector('#add-btn');
const xBtn = document.querySelector('.x-btn');
const modal = document.querySelector('.my-modal');
const submitBtn = document.querySelector('#submit');
const statusBtn = document.querySelector('#status-btn');
const deleteBtn = document.querySelector('#delete-btn');
const myLibrary = [];

function Book(title, author, pages, status, book_id) {
this.title = title;
this.author = author;
this.pages = pages;
this.status = status;
this.book_id = book_id;
};


addBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
});

xBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function addBook(title, author, pages, status) {
   const book_id = crypto.randomUUID();
   const newBook = new Book(title, author, pages, status, book_id);
   myLibrary.push(newBook);
}

addBook('Lord of The Mysteries', 'Cuttlefish', '2000', 'Read');


function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', book.book_id);

  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = "Title:" + book.title;

  const author = document.createElement('h3');
  author.classList.add('author');
  author.textContent = "Author:" + book.author;

  const pages = document.createElement('h3');
  pages.classList.add('pages');
  pages.textContent = "Pages:" + book.pages;

  const statusBtn = document.createElement('button');
  statusBtn.classList.add('btn');
  statusBtn.classList.add('status-btn');
  statusBtn.setAttribute('status', book.status);
  statusBtn.textContent = `Status: ${book.status === 'read' ? 'Read' : 'Not Read'}`;


  statusBtn.addEventListener('click', () => {
    if(statusBtn.textContent.includes('Not')) {
      statusBtn.textContent = "Status: Read";
    }else {
      statusBtn.textContent = "Status: Not Read";
    }
  });


  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';

  document.querySelector('main').appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(statusBtn);
  card.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    card.remove();

    const index = myLibrary.findIndex(b => b.book_id === book.book_id);
    if(index !== -1) {
      myLibrary.splice(index, 1);
    }
  });
}

submitBtn.addEventListener('click', () => {
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const pagesInput = document.querySelector('#pages');
  const statusInput = document.querySelector('#check');

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const status = statusInput.checked ? 'read' : 'unread';

  addBook(title,author,pages,status);
  createCard(myLibrary[myLibrary.length - 1]);


  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  status.checked = false;
  modal.classList.add('hidden');
});





