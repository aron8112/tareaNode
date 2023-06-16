const { LibraryProv } = require('../providers');

const newLibServ = async newLib => {
  const createLib = await LibraryProv.newLibProv(
    newLib
  );
  return createLib;
};

const getAllLibServ = async () => {
  const getAllLib =
    await LibraryProv.getAllLibProv();
  return getAllLib;
};

const getOneLibServ = async id => {
  const getOneLib =
    await LibraryProv.getOneLibProv(id);
  return getOneLib;
};

const changeSomeLibDataServ = async (
  id,
  data
) => {
  const changeLib =
    await LibraryProv.changeSomeLibDataProv(
      id,
      data
    );
  return changeLib;
};

const deleteLibServ = async id => {
  const deleteLib =
    await LibraryProv.deleteLibProv(id);
  return true;
};

const addBooksServ = async (id, data) => {};

module.exports = {
  newLibServ,
  getAllLibServ,
  getOneLibServ,
  deleteLibServ,
  changeSomeLibDataServ,
  addBooksServ,
};
