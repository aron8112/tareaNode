const { BookProv } = require('../providers');
const {
  newBookInLibProv,
} = require('../providers/library');

const newBookServ = async newBook => {
  const createBook = await BookProv.newBookProv(
    newBook
  );
  return createBook;
};

const getAllBookServ = async () => {
  const getAllBook =
    await BookProv.getAllBookProv();
  return getAllBook;
};

const getOneBookServ = async id => {
  const getOneBook =
    await BookProv.getOneBookProv(id);
  return getOneBook;
};

const changeSomeBookDataServ = async (
  id,
  data
) => {
  const changeBook =
    await BookProv.changeSomeBookDataProv(
      id,
      data
    );
  return changeBook;
};

const deleteBookServ = async id => {
  const deleteBook =
    await BookProv.deleteBookProv(id);
  return true;
};

module.exports = {
  newBookServ,
  getAllBookServ,
  getOneBookServ,
  deleteBookServ,
  changeSomeBookDataServ,
};
