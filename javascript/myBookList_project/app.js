// Book Class: represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: handle UI tasks
class UI {
  // no need to instantiate class
  // will just hold static methods

  static displayBooks() {
    const books = Store.getBooks();

    // loop through all books in array
    // call method -> addBookToList()
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    // grab onto book list id in DOM
    const list = document.querySelector("#book-list");

    // will be creating a table element with data
    const row = document.createElement("tr");

    // inserting data into our 'row'
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    // append row to our list
    list.appendChild(row);
  }

  static deleteBook(element) {
    // making sure whatever our user clicks has the book data we need to remove it
    // if our targeted element has a 'delete' class
    if (element.classList.contains("delete")) {
      // using parentElement twice would be targeting the whole row
      element.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    // creating a HTML element to be inserted
    const div = document.createElement("div");
    // passing in our alert styling with its class
    div.className = `alert alert-${className}`;
    // append our message to our div element
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // set a timeout for alert to disappear
    // needs 2 values = targeted element, time limit in ms
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    // select each input element and set the value to an empty value
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Store class: handles storage
class Store {
  // since you can't store objects in storage, we'll be storing strings
  static getBooks() {
    let books;
    // if there is no item called books
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books
// when our DOM content is loaded, it will run the displayBooks() method in our UI class
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a book
// grabbing onto our form id
document.querySelector("#book-form").addEventListener("submit", (element) => {
  // prevent actual submit
  element.preventDefault();

  // get form value
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // validate
  //   if title, author, or isbn is empty, show alert
  if (title === "" || author === "" || isbn === "") {
    // alert("Please fill in all fields");
    UI.showAlert("Please fill in all fields", "danger");

    // if all inputs are filled, follow through with add Book methods
  } else {
    //instantiate book
    const book = new Book(title, author, isbn);

    // add book to our UI
    UI.addBookToList(book);

    // add book to Store
    Store.addBook(book);

    // show success message
    UI.showAlert("Success! Your book is added.", "success");

    // clear input fields when submitted
    UI.clearFields();
  }
});

// Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (element) => {
  //   console.log(e.target);
  UI.deleteBook(element.target);
  // show alert after removing book
  // show success message
  UI.showAlert("Book removed.", "danger");
});
