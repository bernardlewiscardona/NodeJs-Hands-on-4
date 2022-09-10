const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', bookController.bookIndex);

router.get('/books/:id', bookController.bookFind)

router.post('/books', bookController.bookAdd)

router.delete('/books/:id', bookController.bookDelete)

router.get('/add', bookController.bookAddPage)

router.get('/update/:id', bookController.book_update)

router.post('/update/:id', bookController.bookUpdate)

module.exports = router;