const { BookModel } = require('../models');

const newBookProv = async newLib => {
  try {
    const createBook = await BookModel.create(
      newLib
    );
    return createBook;
  } catch (error) {
    throw error;
  }
};

const getAllBookProv = async () => {
  try {
    const getAllBook = await BookModel.findAll({
      paranoid: false,
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
    const foundBook = await BookModel.findByPk(
      id,
      { paranoid: false }
    );
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
    const foundBook = await BookModel.update(
      data,
      {
        where: { id },
      }
    );
    return foundBook;
  } catch (error) {
    throw error;
  }
};

const deleteBookProv = async id => {
  try {
    const deleted = await BookModel.destroy({
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
