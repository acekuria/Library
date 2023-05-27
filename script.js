
let myLibrary = [];

let addBook = document.querySelector('.add-book');
let libraryGrid = document.querySelector('.library')

let form = document.querySelector('form');

function Book (title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

addBook.addEventListener('click', function (e) {
  form.classList.remove('form')
  form.classList.add('formShow');
  
})




function addBookToLibrary (e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let noOfPages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#read').checked;

  let book = new Book(title, author, noOfPages, isRead);

  myLibrary.push(book);
  console.log(myLibrary);

  form.reset();
}

form.addEventListener('submit', addBookToLibrary)

function displayBook () {
  let bookCard = document.createElement(div)
  bookCard.classList.add('book-card')
  libraryGrid.appendChild(bookCard)
}

