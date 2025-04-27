

const myLibrary = [];

function Book(title, author, pages, read, id) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.id = id;
};

function addBook(title, author, pages, read) {
  title = document.querySelector('#title').textContent;
  author = document.querySelector('#author').textContent;
  pages =  document.querySelector('#pages').textContent


   myLibrary.push(title + ' by ' + author + ', ' + pages + ', ' + read + ', ' + crypto.randomUUID());
   for(let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
    document.createElement('div');
  }
}

const theHobbit = addBook('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read');
console.log(myLibrary)

/* function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return (title + ' by ' + author + ', ' + pages + ', ' + read)
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
console.log(theHobbit.info());

console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);

console.log(theHobbit.valueOf()); */