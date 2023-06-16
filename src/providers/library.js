const { LibraryModel } = require('../models');

const newLibProv = async newLib => {
  try {
    const createLib = await LibraryModel.create(
      newLib
    );
    return createLib;
  } catch (error) {
    throw error;
  }
};

const getAllLibProv = async () => {
  try {
    const getAllLib = await LibraryModel.findAll({
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
    const foundLib = await LibraryModel.findByPk(
      id,
      { paranoid: false }
    );
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
    const foundLib = await LibraryModel.update(
      data,
      {
        where: { id },
      }
    );
    return foundLib;
  } catch (error) {
    throw error;
  }
};

const deleteLibProv = async id => {
  try {
    const deleted = await LibraryModel.destroy({
      where: { id: id },
    });
    if (deleted) return true;
  } catch (error) {
    throw error;
  }
};

const addBooksProv = async (id, data) => {
  try {
    const foundLib = await LibraryModel.findOne({
      where: { id },
    });
    foundLib.set(...data);
    foundLib.save();
    return foundLib;
  } catch (error) {}
};

module.exports = {
  newLibProv,
  getAllLibProv,
  getOneLibProv,
  deleteLibProv,
  changeSomeLibDataProv,
  addBooksProv,
};
