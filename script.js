
let myLibrary = [];

let title = document.querySelector('title').textContent;
let author = document.querySelector('author').textContent;
let noOfPages = document.querySelector('noOfPages').textContent;
let isRead = document.querySelector('isRead').textContent;
let submitButton = document.querySelector('submit');

function Book (title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

submitButton.addEventListener('click', function (e) {
  let book = new Book(this.title, this.author, this.noOfPages, this.isRead)
})


// Book.prototype.info = function () {
  // return `The ${this.title} by ${this.author}, ${this.noOfPages}, ${this.isRead} `
// }



function addBookToLibrary () {
  return myLibrary += 
}