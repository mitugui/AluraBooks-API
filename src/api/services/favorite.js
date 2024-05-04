const fs = require("fs")
const path = require("path")

const favoritesPath = path.join(__dirname, "..", "..", "..", "data", "favorites.json")

const favorites = JSON.parse(fs.readFileSync(favoritesPath, "utf-8"))

function getAllFavorites() {
    return favorites
}

function insertFavorite(id) {
    const booksPath = path.join(__dirname, "..", "..", "..", "data", "books.json")
    const books = JSON.parse(fs.readFileSync(booksPath))

    const bookToInsert = books.find(book => book.id === id)

    if (bookToInsert) {
        const newFavoritesList = [...favorites, bookToInsert]
        writeToFavoritesFile(newFavoritesList)
    }
}

function deleteFavoriteByID(id) {
    const filteredBooks = favorites.filter(book => book.id !== id)
    writeToFavoritesFile(filteredBooks)
}

function writeToFavoritesFile(data) {
    fs.writeFileSync(favoritesPath, JSON.stringify(data), "utf-8")
}

module.exports = {
    getAllFavorites,
    insertFavorite,
    deleteFavoriteByID
}