function Book(title, author, isbn){
  this.title= title;
  this.author = author;
  this.isbn = isbn;
}


function UI(){

}

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
  author =document.getElementById('author').value,
  isbn = document.getElementsById('isbn').value;

  console.log(title, author, isbn);


  e.preventDefault();
})