
class Library {
    constructor() {
        this.catalog = []
        this.users = [];
        this.issued = []
    }
    borrow(book, user) {
        if(book.takenBy){
return `not avable`
        }
        book.takenBy = user
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + user.dueDuration);
        book.dueDate += currentDate
        user.books.push(book)
        this.issued.push(book)
        return `succes`
    }

    return (book, user) {
        if(book.takenBy!==user){
return `not u`
        }
        book.takenBy = null
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + user.dueDuration);
        book.dueDate =null
     // Find the index of the book in the array
const index = user.books.indexOf(book);

// If the book exists in the array, remove it
if (index !== -1) {
  user.books.splice(index, 1); // Remove 1 element at the found index
}

// Remove the book from this.issued (assuming this.issued is an array)
const issuedIndex = this.issued.indexOf(book);
if (issuedIndex !== -1) {
  this.issued.splice(issuedIndex, 1); // Remove 1 element at the found index
}
        return `thank u for returning`
    }

out(){
    return this.issued
}
    track() {
        return this.issued.filter(e => {
            const dueDate = e.dueDate instanceof Date ? e.dueDate : new Date(e.dueDate);
            return dueDate.getTime() < Date.now();
          });    }
}

class User {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.books = []
    }
}


class normal extends User {
    constructor(name, id) {
        super(name, id)
        this.dueDuration = 60
    }
}


class spcl extends User {
    constructor(name, id) {
        super(name, id)
        this.dueDuration = 60
    }
}


class book {
    constructor(title, author, ISBN) {
        this.ISBN = ISBN
        this.title = title
        this.author = author
        this.takenBy = null
        this.dueDate = null
    }
}


class ebook extends book {
    constructor(title, author, ISBN, site) {
        super(title, author, ISBN)
        this.site = site

    }
}

class PrintedBook extends book {
    constructor(title, author, ISBN, publisher) {
        super(title, author, ISBN)
        this.publisher = publisher
    }
}
let lib = new Library()
let book1 = new PrintedBook("b", "sohan", 123, "penguin")
let user = new normal("mohan", 11)
lib.borrow(book1, user)
// lib.return(book1, user)
// console.log(lib,"lib");
// console.log(lib.out(), "lib.out()");

console.log(lib.track(), "lib.track()");

