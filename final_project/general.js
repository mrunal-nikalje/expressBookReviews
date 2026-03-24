// general.js
const axios = require('axios');

async function getAllBooks() {
    const response = await axios.get('http://localhost:5000/books');
    console.log("All Books:", response.data);
}

async function getBookByISBN(isbn) {
    const response = await axios.get(`http://localhost:5000/books/${isbn}`);
    console.log(`Book with ISBN ${isbn}:`, response.data);
}

async function getBooksByAuthor(author) {
    const response = await axios.get(`http://localhost:5000/books/author/${author}`);
    console.log(`Books by ${author}:`, response.data);
}

async function getBooksByTitle(title) {
    const response = await axios.get(`http://localhost:5000/books/title/${title}`);
    console.log(`Books with title ${title}:`, response.data);
}

// Test the functions
getAllBooks();
getBookByISBN('1234567890');
getBooksByAuthor('J.K.Rowling');
getBooksByTitle('HarryPotter');