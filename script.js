let myLibrary = [];



function Book (title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.noOfPages}, ${this.isRead} `
}



function addBookToLibrary () {

}