/*Class to represent a Library with functions to add, remove, and look up books in various ways*/

/*Constructor for Library class - use prototype (below) to make methods*/
var Library = function(){
  this._bookShelf = new Array();
};

/*Constructor for Book class - no methods*/
var Book = function (title, author, numberOfPages, publishDate){
  this.title = String(title);
  this.author = String(author);
  this.numberOfPages = Number(numberOfPages);
  this.publishDate = new Date(publishDate);
};

Library.prototype.addBook = function (book) {
  /*Purpose: Add a book object to your books array.
  Return: boolean true if it is not already added, false if it is already added.*/

  //primitive input error handling
  if (typeof book === 'object'){
    for(i=0; i<this._bookShelf.length; i++){
      //check if book is present, if present return false, otherwise push {Book} and return true
      if(book === this._bookShelf[i]){
        return false;
      }
    }
    this._bookShelf.push(book);
    return true;
  } else {
    console.log("Error: input must be in the Book object format")
  }
};

Library.prototype.removeBookbyTitle = function (title) {
  /*Purpose: Remove book from from the books array by its title.
  Return: boolean true if the book(s) were removed, false if no books match*/

  //create counter to see if a book was removed
  var removed = 0;
  for(i=0; i<this._bookShelf.length; i++){
    //variable to keep crazy dots in perspective
    //toLowerCase used so remove function is not case sensitive
    var bookShelfTitle = this._bookShelf[i].title.toLowerCase();
    //if titles are exactly equal remove entry, increment removed
    if(bookShelfTitle === (title.toLowerCase())){
      this._bookShelf.splice(i, 1);
      removed++;
    };
  }
  //if removed is not 0, book was removed, return true
  if(removed > 0){
    return true;
  } else {
    return false;
  }
};

Library.prototype.removeBookByAuthor = function (authorName) {
  /*Purpose: Remove a specific book from your books array by the author name.
  Return: boolean true if the book(s) were removed, false if no books match */

  //reuse logic from removeBookbyTitle
  var removed = 0;
  for(i=0; i<this._bookShelf.length; i++){
    var bookShelfAuthor = this._bookShelf[i].author.toLowerCase();
    //if titles are exactly equal remove entry, increment removed
    if(bookShelfAuthor === (authorName.toLowerCase())){
      this._bookShelf.splice(i, 1);
      removed++;
      /* splice lets the next entry "fall" back into the previous index so we have to go back to check that entry
      We accomplish this by resetting the index to the previous number but only if we've spliced something
      This doesn't matter for removeBookbyTitle because there will only be one book with that title.
      Technically though, we are skipping searching an entry. */
      i--;
    };
  }
  if(removed > 0){
    return true;
  } else {
    return false;
  }
};

Library.prototype.getRandomBook = function () {
  /*Purpose: Return a random book object from your books array
  Return: book object if you find a book, null if there are no books
*/

};

Library.prototype.getBookByTitle = function (title) {
  /*Purpose: Return all books that completely or partially matches the string title passed into the function
  Return: array of book objects if you find books with matching titles, empty array if no books are found*/
  var hasTitle = /title/;
  var hasTitleArray = new Array();
  for(i=0; i<this._bookShelf.length; i++){
    hasTitleArray = this._bookShelf[i].title.match(hasTitle);
    return hasTitleArray;
  }


};

Library.prototype.getBooksByAuthor = function (authorName) {
  /*
  Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
  Return: array of books if you find books with match authors, empty array if no books match*/

};

Library.prototype.addBooks = function (books) {
  /*Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  Return: number number of books successfully added, 0 if no books were added*/
  if (typeof books === 'object'){
    var count = 0;
    //loop through input array
    for(j=0; j<books.length; j++){
      /*use previous function (which outputs true for added and false for not added)
      if book can be added, increase count and add book*/
      if(this.addBook(books[j])) {
        count++;
        this.addBook(books[j]);
      }
    }
    return count;
  } else {
    console.log("Error: input must be in array format")
  }
};

Library.prototype.getAuthors = function () {
  /*Purpose: Find the distinct authors’ names from all books in your library
  Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist*/

};

Library.prototype.getRandomAuthorName = function () {
  /*Purpose: Retrieves a random author name from your books collection
  Return: string author name, null if no books exist*/

};


//List of Books to experiment:
var book1 = new Book("The Name of the Wind", "Patrick Rothfuss", 662, "March 2007");
var book2 = new Book("Harry Potter and the Sorceror's Stone", "JK Rowling", 102, "June 1997");
var book3 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", 226, "July 1998");
var book4 = new Book("Harry Potter and the Golblet of Fire", "JK Rowling", 662, "July 2000");
var book5 = new Book("New Moon", "Midori Snyder", 176, "June 2005");
var book6 = new Book("206 Bones", "Kathy Reichs", 124, "May 2009");
var book7 = new Book("Eragon", "Christopher Paolini", 662, "August 2003");
var book8 = new Book("The Martian", "Andy Wier", 207, "February 2011");
var book9 = new Book("Harry Potter and the Order of the Phoenix", "JK Rowling", 700, "June 2003");
var book10 = new Book("The Wise Man's Fear", "Patrick Rothfuss", 540, "March 2011");
var book11 = new Book("Cloud Atlas", "David Mitchell", 250, "October 2012");
var book12 = new Book("The Cloud Atlas", "Liam Callanan", 190, "October 2004");
var fiveBooks = [book6, book7, book8, book9, book10];
var firstfiveBooks = [book1, book2, book3, book4, book5];
var tricksyBooks = [book11, book12];





document.addEventListener("DOMContentLoaded", function() {
  window.goldenLibrary = new Library();
  goldenLibrary.addBooks(firstfiveBooks);
  goldenLibrary.addBooks(fiveBooks);
  goldenLibrary.addBooks(tricksyBooks);
});
