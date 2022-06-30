const express = require('express');
const router = express.Router();
const {
  registerBook,
  getCatalogues,
  deleteBook,
  searchCatalogue,
  editBook,
} = require('../controllers/catalogueController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getCatalogues);
router.get('/search', protect, searchCatalogue);
router.post('/register', protect, registerBook);
router.put('/:id', protect, editBook).delete('/:id', protect, deleteBook);

module.exports = router;
