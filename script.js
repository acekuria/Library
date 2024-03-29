
let myLibrary = [];
let addBook = document.querySelector('.add-book');
let libraryGrid = document.querySelector('.library');
let form = document.querySelector('form');
let container = document.querySelector('.container');

class Book {
  constructor (title, author, noOfPages, isRead ) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
  }
  toggleReadStatus () {
    this.isRead = !this.isRead;
  };
}

addBook.addEventListener('click', function(e) {
  showForm();
  // emphasizeForm();
});

function addBookToLibrary(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let noOfPages = document.querySelector('#pages').value;
  let isRead = document.querySelector('#read').checked;
  let book = new Book(title, author, noOfPages, isRead);

  myLibrary.push(book);
  form.reset();
  hideForm();
  // removeEmphasis();
  displayBook();
}

function displayBook() {
  libraryGrid.innerHTML = '';
  for (let book of myLibrary) {
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    libraryGrid.appendChild(bookCard);

    let titleElement = document.createElement('h3');
    titleElement.textContent = book.title;
    titleElement.textContent.toUpperCase;
    bookCard.appendChild(titleElement);

    let authorElement = document.createElement('p');
    authorElement.textContent = 'Author: ' + book.author;
    bookCard.appendChild(authorElement);

    let pagesElement = document.createElement('p');
    if (book.noOfPages === '') {
      pagesElement.textContent = 'Pages: 🤨';
    } else {
      pagesElement.textContent = 'Number of Pages: ' + book.noOfPages;
    }
    bookCard.appendChild(pagesElement);

    let readElement = document.createElement('button');
    if (book.isRead === true) {
      readElement.textContent = 'Have I read it?: Yes';
      readElement.classList.add('green');
    } else {
      readElement.textContent = 'Have I read it?: No ';
      readElement.classList.add('red');
    }

    readElement.addEventListener('click', function() {
      book.toggleReadStatus();
      displayBook();
    });

    bookCard.appendChild(readElement);

    removeButtonFunction(book, bookCard);

   
  }
}
function hideForm() {
  form.classList.add('form');
  form.classList.remove('form-show');
}

function showForm() {
  form.classList.remove('form');
  form.classList.add('form-show');
}

function handleClickOutside(event) {
  if (!form.contains(event.target) && !addBook.contains(event.target)) {
    hideForm();
    // removeEmphasis();
  }
}

document.addEventListener('click', handleClickOutside);

function removeButtonFunction(book, bookCard) {
  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove');
  bookCard.appendChild(removeButton);

  removeButton.addEventListener('click', function() {
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBook();
  });
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');

const error = (input) => {
    if (input.validity.tooShort) {
      input.setCustomValidity('This is too short!')
    }
    else if (input.validity.tooLong) {
      input.setCustomValidity('This is too long!')
    }
    else {
      input.setCustomValidity('')
    }
}

title.addEventListener('input', function () {
  error(title);
  if (!title.validity.valid) {
    title.className = 'error'
  }
  if (title.validity.valid) {
    title.className = 'no-error'
  }
});

author.addEventListener('input', function () {
  error(author);
  if (!author.validity.valid) {
    author.className = 'error'
  }
  if (author.validity.valid) {
    author.className = 'no-error'
  }
});


form.addEventListener('submit', function(e) {

  addBookToLibrary(e);
});
  
