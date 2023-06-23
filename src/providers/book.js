const { Book, Library } = require('../models');

const newBookProv = async newBook => {
  const { libraryId } = newBook;
  try {
    const createBook = await Book.create(
      newBook,
      libraryId
    );
    return createBook;
  } catch (error) {
    throw error;
  }
};

const getAllBookProv = async () => {
  try {
    const getAllBook = await Book.findAll({
      paranoid: false,
      include: { all: true },
    });
    return getAllBook;
  } catch (error) {
    throw error;
  }
};

const getOneBookProv = async lib => {
  let type = typeof lib;
  console.log(`Al provider llega: ${type}`);
  const id = parseInt(lib);
  console.log(typeof id);
  try {
    const foundBook = await Book.findByPk(id, {
      paranoid: false,
      include: { all: true },
    });
    return foundBook;
  } catch (error) {
    throw error;
  }
};

const changeSomeBookDataProv = async (
  id,
  data
) => {
  console.log(
    `Datos que llegan para modif: ${JSON.stringify(
      data
    )} y el type es: ${typeof data}`
  );

  try {
    const foundBook = await Book.update(data, {
      where: { id },
    });
    return foundBook;
  } catch (error) {
    throw error;
  }
};

const deleteBookProv = async id => {
  try {
    const deleted = await Book.destroy({
      where: { id: id },
    });
    if (deleted) return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  newBookProv,
  getAllBookProv,
  getOneBookProv,
  deleteBookProv,
  changeSomeBookDataProv,
};
