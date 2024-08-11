const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CRUD routes for books
router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
