const express = require('express');
const router = express.Router();
const {
  registerBook,
  getCatalogues,
  deleteBook,
  searchCatalogue,
  editBook,
} = require('../controllers/catalogueController');

router.get('/', getCatalogues);
router.get('/search', searchCatalogue);
router.post('/register', registerBook);
router.put('/:id', editBook).delete('/:id', deleteBook);

module.exports = router;
