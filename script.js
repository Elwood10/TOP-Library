//set up array to store books
const myLibrary = [];
let card
//initialize display for later function

let display;
let bookList;

//open the add book form
let openForm = document.getElementById("addBook");
let getForm = document.getElementById("form-section");
openForm.addEventListener("click", () => {
	getForm.showModal();
})

//creates book object
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
	
    
//gets form info to create new object for library array
function addBookToLibrary() {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked
		? "I have read it."
		: "No, I haven't read it.";

	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);

	// Clear the form fields after adding the book
	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	document.getElementById("read").checked = false;
}

//on submit click pushes new book to array and displays book on webpage

let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	addBookToLibrary();

	//Clears page of previous activity for refreshed info
	document.getElementById("container2").innerHTML = "";
    display();
})

//creates html elements for page to run on submit
 display = function() {

	myLibrary.forEach((Book) => {

	const bookList = document.getElementById("container2");
	let card = document.createElement("div");
	card.id = "inventory";
	card.classList.add("inventory")
	
	bookList.append(card);

	let bookSpace = document.createElement("p");
	let bookSpaceTitle = document.createTextNode(`title: ${Book.title}`);
	bookSpace.append(bookSpaceTitle);

	let bookSpace2 = document.createElement("p");
	let bookSpaceAuthor = document.createTextNode(`author: ${Book.author}`);
	bookSpace2.append(bookSpaceAuthor);

	let bookSpace3 = document.createElement("p");
	let bookSpacePages = document.createTextNode(`pages: ${Book.pages}`);
	bookSpace3.append(bookSpacePages);

	let bookSpace4 = document.createElement("p");
	let bookSpaceRead = document.createTextNode(`Read: ${Book.read}`);
	bookSpace4.append(bookSpaceRead);

//set up remove from library button//
let bookSpace5 = document.createElement("button");
let bookSpaceRemove = document.createTextNode("Remove");
bookSpace5.classList.add("removeBook");
bookSpace5.id = "removeBook";
bookSpace5.append(bookSpaceRemove);

card.append(bookSpace);
card.append(bookSpace2);
card.append(bookSpace3);
card.append(bookSpace4);
card.append(bookSpace5);
bookList.append(card)

})
//removes book from library array and reloads page with new booklist 
const begone = document.getElementsByClassName("removeBook");
const buttn = Array.from(begone)
  buttn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = Array.from(buttn).indexOf(e.target);
     
      let deleteBook = index
      myLibrary.splice(deleteBook,1)
     console.log(myLibrary)

	 //refreshes page after removal of book
	 document.getElementById("container2").innerHTML = "";
    display();

    })
  
    })

}



