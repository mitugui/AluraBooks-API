const fs = require("fs")

const books = JSON.parse(fs.readFileSync("books.json"))

function getAllBooks() {
    return books
}

function getBookByID(id) {
    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
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

function deleteBookByID(id) {
    const filteredBooks = books.filter(book => book.id !== id)
    fs.writeFileSync("books.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    modifyBook,
    deleteBookByID
}