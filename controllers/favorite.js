const { getAllFavorites, insertFavorite, deleteFavoriteByID } = require("../services/favorite")

function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites()
        res.send(favorites)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.send("Olá, mundo!")
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        insertFavorite(id)
        res.status(201)
        res.send("Favorito inserido com sucesso!")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteFavoriteByID(id)
            res.send("Favorito deletado com sucesso")  
        } else {
            res.status(422)
            res.send("Id inválido!")
        }      
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorites,
    postFavorite,
    deleteFavorite
}