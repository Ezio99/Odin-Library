let myLibrary = [new Book('Robin hood'), new Book('The three body problem'), new Book('God is a gamer')];

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
    this.getName = function (){
        return name
    };
}

function addBookToLibrary(e){
    e.preventDefault();
    const BookName = dialog.querySelector("#Bookname").value
    const book = new Book(BookName)
    myLibrary.push(book);
    cards.appendChild(createCard(book))
    console.log(myLibrary)
    dialog.close()
}

function createCard(book){
    const card = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = book.getName();
    card.classList.add('card');
    card.appendChild(p);
    
    return card
}

function displayCards(){
    for (const book of myLibrary) {
        cards.appendChild(createCard(book))
    }
}

