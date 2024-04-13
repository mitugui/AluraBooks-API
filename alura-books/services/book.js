const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookByID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newBooksList = [...books, newBook]
    fs.writeFileSync("books.json", JSON.stringify(newBooksList))
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    const changedContent = { ...currentBooks[modifiedIndex], ...modifications }

    currentBooks[modifiedIndex] = changedContent

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    modifyBook
}