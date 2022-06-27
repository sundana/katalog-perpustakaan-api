const express = require('express');
const router = express.Router();
const {
  registerBook,
  getCatalogues,
  deleteBook,
} = require('../controllers/catalogueController');

router.get('/', getCatalogues);
router.post('/register', registerBook);
router.delete('/:id', deleteBook);

module.exports = router;
