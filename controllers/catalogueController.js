const Book = require('../models/bookModel');

// @desc    Register a book
// @route   POST /api/catalogue/register
// @access  Public
const registerBook = async (req, res) => {
  const { title, writer, publisher, year } = req.body;
  const book = await Book.create({
    title,
    writer,
    publisher,
    year,
  });
  if (book) {
    res.status(200).json({
      title: book.title,
      writer: book.writer,
      publisher: book.publisher,
      year: book.year,
    });
  } else {
    res.status(400);
    throw new Error('Failed to register a book');
  }
};

// Desc     Get all catalogues
// router   GET /api/catalogues
// Access   Private
const getCatalogues = async (req, res) => {
  const books = await Book.find({});
  if (books) {
    res.status(200).json(books);
  } else {
    res.status(400);
    throw new Error('Request Failed');
  }
};

// @desc    Delete a book
// @route   /api/catalogue/:id
// Access   Private
const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error('Invalid id');
  } else {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      id: book._id,
    });
  }
};

module.exports = {
  registerBook,
  getCatalogues,
  deleteBook,
};
