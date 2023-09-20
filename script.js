/* make array to hold the book entries*/
const myLibrary = []

/* creates the book objects for the library*/
function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addBookToLibrary() {
	let title = document.getElementById("title").value
	let author = document.getElementById("author").value
	let pages = document.getElementById("pages").value
	let read = document.getElementById("read").checked
		? "I have read it."
		: "No, I haven't read it."

	let newBook = new Book(title, author, pages, read)
	myLibrary.push(newBook)

  

	// Clear the form fields after adding the book
	document.getElementById("title").value = ""
	document.getElementById("author").value = ""
	document.getElementById("pages").value = ""
	document.getElementById("read").checked = false
}


/* set up the modal pop up for adding books to the library*/
let openForm = document.getElementById("addBook")
let getForm = document.getElementById("form-section")
openForm.addEventListener("click", () => {
	getForm.showModal()
})
//add books to html//
let submitButton = document.getElementById("submit")
submitButton.addEventListener("click", (e) => {
	e.preventDefault()
  
	addBookToLibrary()




	console.log(myLibrary)

  myLibrary.forEach((Book) => {
	

	const bookList = document.getElementById("container2")
	let card = document.createElement("div")
	card.classList.add("inventory")
	bookList.appendChild(card)

	let bookSpace = document.createElement("p")
	let bookSpaceTitle = document.createTextNode(`title: ${Book.title}`)
	bookSpace.appendChild(bookSpaceTitle)

	let bookSpace2 = document.createElement("p")
	let bookSpaceAuthor = document.createTextNode(`author: ${Book.author}`)
	bookSpace2.appendChild(bookSpaceAuthor)

	let bookSpace3 = document.createElement("p")
	let bookSpacePages = document.createTextNode(`pages: ${Book.pages}`)
	bookSpace3.appendChild(bookSpacePages)

	let bookSpace4 = document.createElement("p")
	let bookSpaceRead = document.createTextNode(`Read: ${Book.read}`)
	bookSpace4.appendChild(bookSpaceRead)

  
  
  //set up remove from library button//
  let bookSpace5 = document.createElement("button")
	let bookSpaceRemove = document.createTextNode("Remove")
bookSpace5.classList.add("removeBook")
	bookSpace5.appendChild(bookSpaceRemove)

  card.remove()

	card.appendChild(bookSpace)
	card.appendChild(bookSpace2)
	card.appendChild(bookSpace3)
	card.appendChild(bookSpace4)
  card.appendChild(bookSpace5)
  
  console.log(myLibrary)
  })
})
  
  
