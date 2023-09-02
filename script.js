const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked ? "I have read it." : "No, I haven't read it.";

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  // Clear the form fields after adding the book
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  console.log(myLibrary);
});

