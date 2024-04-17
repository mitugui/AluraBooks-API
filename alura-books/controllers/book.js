const { getAllBooks, getBookByID, insertBook, modifyBook, deleteBookByID } = require("../services/book")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.send("Olá, mundo!")
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const book = getBookByID(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    res.send("Olá, mundo!")
}

function postBook(req, res) {
    try {
        const newBook = req.body
        insertBook(newBook)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id
        const modifications = req.body  

        if(id && Number(id)) {
            modifyBook(modifications, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteBookByID(id)
            res.send("Item excluído com sucesso")  
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
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}