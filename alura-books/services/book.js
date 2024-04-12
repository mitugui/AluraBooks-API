const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookByID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBook = books.filter(books => books.id === id)[0]
    return filteredBook
}

module.exports = {
    getAllBooks,
    getBookByID
}