
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
  showForm(); 
})

function addBookToLibrary (e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let noOfPages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#read').checked;
  let book = new Book(title, author, noOfPages, isRead);

  myLibrary.push(book);
  form.reset();
  hideForm();
}

function displayBook () {
  libraryGrid.innerText = '';
  for (let book in myLibrary) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    libraryGrid.appendChild(bookCard);
    bookCard.innerText = 898;
  }

}

form.addEventListener('submit', addBookToLibrary)
form.addEventListener('submit', displayBook)

function hideForm () {
  form.classList.add('form')
  form.classList.remove('formShow');
}

function showForm () {
  form.classList.remove('form')
  form.classList.add('formShow');
}

function handleClickOutside (event) {
  if(!form.contains(event.target) && !addBook.contains(event.target)) {
    hideForm();
  }
}

document.addEventListener('click', handleClickOutside)

