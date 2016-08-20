

/** 
 * class Book
 * 
 * A simple Book class that instantiates with
 * two parameters  bookTitle and  author 
 * 
 */
class Book {
    /**
     * @constructor
     * 
     * @param bookTitle and author
     * 
     * 
     */
    constructor(bookTitle, author) {
        if(typeof(bookTitle) === 'undefined' || typeof(author) === 'undefined') {
            throw new Error('Book title and Author was not Inputed');
        }
        this.bookTitle = bookTitle.toString();
        this.author = author.toString();
        
        console.log('New Book created successfully');
    }
}

/** 
 * class Library
 * 
 * A Library class that instantiates with
 * a single parameter an arry bookShelf that stores
 * instances from the Book class
 * 
 */
class Library {
    /**
     * @constructor
     * 
     */
    constructor(){
        this.bookShelf = [];
    }
    
    /**
     * this method takes a book object and adds it
     * to library.bookShelf
     * 
     * @param object book
     * 
     */
    addBook(book) {
        if (book instanceof Book && !(book in this.bookShelf)) {
            
            this.bookShelf.push(book);
            console.log('Book Has been added Successfully ');
            
        } else {
            console.log('Book already Exits in the Library');
        }
    }
    
    /**
     * this method takes a book object and removes it
     * from library.bookShelf
     * 
     * @param object book
     * 
     */
     
    removeBook(book) {
        if (this.bookShelf.length > 0 && book instanceof Book) {
            for(var i = 0; i < this.bookShelf.length; i++) {
                if (this.bookShelf[i].bookTitle === book.bookTitle) {
                    this.bookShelf.splice(i, 1);
                }
            } 
        } else {
            console.log('There is no book in the library');
        }
    }
    
    /**
     * this method prints out the list of books
     * in library.bookShelf with their  authors 
     * 
     */
    getBooks() {
        if (this.bookShelf.length > 0) {
            for (var i = 0; i < this.bookShelf.length; i++) {
                console.log(this.bookShelf[i].bookTitle);
                console.log('by - ' + this.bookShelf[i].author + '\n');
            }
        } else {
            console.log('There is no book in the library');
        }
    }
}



//Instantiate two books -> firstBook, secondBook
var newBook1 = new Book("Java Standard Edition Version Eight", "Adeyemo David Sunday");
var newBook2 = new Book("Programming in Python ", "Kiti Gbolahan");
console.log();

//Instantiate library
var library = new Library();

//Add books to library
library.addBook(newBook1);
library.addBook(newBook2);
console.log();

//List out current books in library
library.getBooks();

console.log('Remainig Books in The library Are :')
console.log()

//Remove firstbook from library
library.removeBook(newBook1);

//List remaining books in library
library.getBooks();




