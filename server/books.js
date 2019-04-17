const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

const users = require("./users.js");
const User = users.model;

const bookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    title: String,
    author: String,
    beenRead: Boolean,
});

const Book = mongoose.model('Book', bookSchema);

router.post('/', auth.verifyToken, User.verify, async (req, res) => {
    const book = new Book({
        user: req.user,
        title: req.body.title,
        author: req.body.author,
        beenRead: req.body.beenRead
    });
    try {
        await book.save();
        res.send(book);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.get('/', auth.verifyToken, User.verify, async (req, res) => {
    try {
        let books = await Book.find({
            user: req.user
        });
        res.send(books);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete("/:id", auth.verifyToken, User.verify, async (req, res) => {
    try {
        await Book.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.put("/:id", auth.verifyToken, User.verify, async (req, res) => {
    try {
        let book = await Book.findOne({
            _id: req.params.id,
            user: req.user
        });
        book.beenRead = req.body.beenRead;
        book.save();
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = {
    model: Book,
    routes: router,
}