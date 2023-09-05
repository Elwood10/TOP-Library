/* make array to hold the book entries*/
const myLibrary = [];
/* creates the book objects for the library*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
/* gets the event to run the add to myLibrary*/
let addBook = document.getElementById("addBook")
addBook.addEventListener("click", addIt())
function addIt(){

}
/* gets the input from the form for the new book*/
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
/* set up the modal pop up for adding books to the library*/
let openForm = document.getElementById("addBook");
let closeForm = document.getElementById("close-form");
let getForm = document.getElementById("form-section")

openForm.addEventListener('click', () => {
  getForm.showModal();
})
