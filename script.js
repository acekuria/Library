
let myLibrary = [];

// let submitButton = document.querySelector('.submit');
let form = document.querySelector('form');

function Book (title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

form.addEventListener('submit', addBookToLibrary)
console.log(myLibrary);

// Book.prototype.info = function () {
  // return `The ${this.title} by ${this.author}, ${this.noOfPages}, ${this.isRead} `
// }



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
