const { BookServ } = require('../services');

const newBook = async (req, res) => {
  const Book = req.body;
  console.log('controlador activado');
  try {
    const createBook = await BookServ.newBookServ(
      Book
    );
    console.log('libro creado');
    return res.status(201).json({
      message: `The new Book ${createBook.name} was created successfully!`,
      quote:
        'Books were only one type of receptacle where we stored a lot of things we were afraid we might forget. There is nothing magical in them at all. The magic is only in what books say, how they stitched the patches of the universe together into one garment for us.',
      createBook,
    });
  } catch (error) {
    return res.status(400).json({
      action: 'Create a new Book',
      error: error.message,
    });
  }
};

const getOneBook = async (req, res) => {
  const { id } = req.params;
  try {
    const getOne = await BookServ.getOneBookServ(
      id
    );
    return res.status(200).json(getOne);
  } catch (error) {
    return res.status(400).json({
      action: 'Get one Book',
      error: error.message,
    });
  }
};

const getAllBook = async (_req, res) => {
  try {
    const getOne =
      await BookServ.getAllBookServ();
    return res.status(200).json(getOne);
  } catch (error) {
    return res.status(400).json({
      action: 'Get all Books',
      error: error.message,
    });
  }
};

const deleteBookr = async (req, res) => {
  const { id } = req.params;
  try {
    const lessBooks =
      await BookServ.deleteBookServ(id);
    if (lessBooks) {
      return res.status(200).json({
        message:
          'You don’t have to burn books to destroy a culture. Just get people to stop reading them.',
      });
    }
  } catch (error) {
    return res.status(400).json({
      action: 'Delete one Book',
      message:
        'Luckily you could not delete the Book :) And I thought about books. And for the first time I realized that a man was behind each one of the books.',
      error: error.message,
    });
  }
};

const modBook = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const modBookr =
      await BookServ.changeSomeBookDataServ(
        id,
        data
      );

    if (modBookr) {
      return res.status(200).json({
        message: 'Data was modified succesfully',
      });
    }
  } catch (error) {
    return res.status(400).json({
      action: 'Modify some Book data',
      error: error.message,
    });
  }
};

module.exports = {
  newBook,
  getOneBook,
  getAllBook,
  deleteBookr,
  modBook,
};
