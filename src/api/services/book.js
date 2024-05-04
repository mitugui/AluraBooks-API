const fs = require("fs")
const path = require("path")

const booksPath = path.join(__dirname, "..", "..", "..", "data", "books.json")

const books = JSON.parse(fs.readFileSync(booksPath, "utf-8"))

function getAllBooks() {
    return books
}

function getBookByID(id) {
    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
    const newBooksList = [...books, newBook]
    writeToBooksFile(newBooksList)
}

function modifyBook(modifications, id) {
    let currentBooks = books
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    const changedContent = { ...currentBooks[modifiedIndex], ...modifications }

    currentBooks[modifiedIndex] = changedContent

    writeToBooksFile(currentBooks)
}

function deleteBookByID(id) {
    const filteredBooks = books.filter(book => book.id !== id)
    writeToBooksFile(filteredBooks)
}

function writeToBooksFile(data) {
    fs.writeFileSync(booksPath, JSON.stringify(data), "utf-8")
}

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    modifyBook,
    deleteBookByID
}