const fs = require("fs")

const favorites = JSON.parse(fs.readFileSync("favorites.json"))

function getAllFavorites() {
    return favorites
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookToInsert = books.find(book => book.id === id)

    const newFavoritesList = [...favorites, bookToInsert]

    fs.writeFileSync("favorites.json", JSON.stringify(newFavoritesList))
}

function deleteFavoriteByID(id) {
    const filteredBooks = favorites.filter(book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllFavorites,
    insertFavorite,
    deleteFavoriteByID
}