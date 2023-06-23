const { Library, Book } = require('../models');

const newLibProv = async newLib => {
  try {
    const createLib = await Library.create(
      newLib
    );
    return createLib;
  } catch (error) {
    throw error;
  }
};

const newBookInLibProv = async (libId, book) => {
  try {
    const foundLib = await Library.findByPk(
      libId
    );
    if (foundLib) {
      const createBookInLib = await Book.create({
        ...book,
        LibraryId: libId,
      });
      return createBookInLib;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const getAllLibProv = async () => {
  try {
    const getAllLib = await Library.findAll({
      include: { all: true },
      paranoid: false,
    });
    return getAllLib;
  } catch (error) {
    throw error;
  }
};

const getOneLibProv = async lib => {
  let type = typeof lib;
  console.log(`Al provider llega: ${type}`);
  const id = parseInt(lib);
  console.log(typeof id);
  try {
    const foundLib = await Library.findByPk(id, {
      paranoid: false,
      include: { all: true },
    });
    return foundLib;
  } catch (error) {
    throw error;
  }
};

const changeSomeLibDataProv = async (
  id,
  data
) => {
  console.log(
    `Datos que llegan para modif: ${JSON.stringify(
      data
    )} y el type es: ${typeof data}`
  );

  try {
    const foundLib = await Library.update(data, {
      where: { id },
    });
    return foundLib;
  } catch (error) {
    throw error;
  }
};

const deleteLibProv = async id => {
  try {
    const deleted = await Library.destroy({
      where: { id: id },
    });
    if (deleted) return true;
  } catch (error) {
    throw error;
  }
};

const addBooksProv = async (id, data) => {
  try {
    const foundLib = await Library.findOne({
      where: { id },
    });
    foundLib.set(...data);
    foundLib.save();
    return foundLib;
  } catch (error) {}
};

module.exports = {
  newLibProv,
  newBookInLibProv,
  getAllLibProv,
  getOneLibProv,
  deleteLibProv,
  changeSomeLibDataProv,
  addBooksProv,
};
