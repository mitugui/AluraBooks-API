const fs = require("fs")

function getAllFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookToInsert = books.find(book => book.id === id)

    const favorites = JSON.parse(fs.readFileSync("favorites.json"))
    const newFavoritesList = [...favorites, bookToInsert]

    fs.writeFileSync("favorites.json", JSON.stringify(newFavoritesList))
}

function deleteFavoriteByID(id) {
    const books = JSON.parse(fs.readFileSync("favorites.json"))

    const filteredBooks = books.filter(book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllFavorites,
    insertFavorite,
    deleteFavoriteByID
}