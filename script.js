// [new Book('Robin hood'), new Book('The three body problem'), new Book('God is a gamer')];
let myLibrary = new Map()

myLibrary.set('Robin hood',new Book('Robin hood'))
myLibrary.set('The three body problem',new Book('The three body problem'))
myLibrary.set('God is a gamer',new Book('God is a gamer'))

let cards = document.querySelector('.cards');
const showFormButton = document.querySelector('#ShowForm');
const addBookButton = document.querySelector('#AddBook');
const dialog = document.querySelector('dialog');

displayCards()

showFormButton.addEventListener('click', () => {
    dialog.showModal()


})

addBookButton.addEventListener('click', addBookToLibrary)



function Book(name){
    this.name = name;
    this.readStatus = false;

    this.getName = function (){
        return name
    };
}

function toggleRead(e){
    const bookName = e.target.parentNode.parentNode.id
    console.log(e)
    let parent = document.getElementById(`${bookName}`)

    myLibrary.get(bookName).readStatus = !myLibrary.get(bookName).readStatus

    parent.querySelector('#ReadStatus').textContent = `Finished Reading : ${myLibrary.get(bookName).readStatus}`

}

function addBookToLibrary(e){
    e.preventDefault();
    const BookName = dialog.querySelector("#Bookname").value
    const book = new Book(BookName)
    myLibrary.set(BookName,book);
    cards.appendChild(createCard(book))
    dialog.close()
}

function removeBookFromLibrary(e){
    console.log(e)
    console.log(e.target.parentNode.id)
    console.log(`#${e.target.parentNode.parentNode.id}`)


    myLibrary.delete(`${e.target.parentNode.parentNode.id}`)
    console.log(myLibrary)
    document.getElementById(`${e.target.parentNode.parentNode.id}`).remove()

}

function createCard(book){
    const card = document.createElement('div');
    const p = document.createElement('p');
    const readStatus = document.createElement('p');
    const removeButton = document.createElement('button');
    const readButton = document.createElement('button');
    const cardButtons = document.createElement('div');

    card.classList.add('card');
    card.id = book.getName();

    cardButtons.classList.add('cardButtons');

    p.textContent = book.getName();
    readStatus.textContent = `Finished Reading : ${book.readStatus}`;
    readStatus.id="ReadStatus"

    removeButton.textContent="Remove"
    removeButton.addEventListener("click", removeBookFromLibrary);

    readButton.textContent="Toggle Read"
    readButton.addEventListener("click",toggleRead)

    card.appendChild(p);
    card.appendChild(readStatus)

    cardButtons.appendChild(removeButton)
    cardButtons.appendChild(readButton)

    card.appendChild(cardButtons)
    
    return card
}

function displayCards(){
    for (const [key,value] of myLibrary) {
        cards.appendChild(createCard(value))
    }
}

