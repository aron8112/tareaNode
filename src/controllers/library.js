const { LibraryServ } = require('../services');

const newLib = async (req, res) => {
  const library = req.body;
  try {
    const createLib =
      await LibraryServ.newLibServ(library);
    res.status(201).json({
      message: `The new Library ${createLib.name} was created successfully! Check the data below: `,
      createLib,
    });
  } catch (error) {
    res.status(400).json({
      action: 'Create a new Library',
      error: error.message,
    });
  }
};

const getOneLib = async (req, res) => {
  const { id } = req.params;
  try {
    const getOne =
      await LibraryServ.getOneLibServ(id);
    res.status(200).json(getOne);
  } catch (error) {
    res.status(400).json({
      action: 'Get one Library',
      error: error.message,
    });
  }
};

const getAllLib = async (_req, res) => {
  try {
    const getOne =
      await LibraryServ.getAllLibServ();
    res.status(200).json(getOne);
  } catch (error) {
    res.status(400).json({
      action: 'Get all Libraries',
      error: error.message,
    });
  }
};

const deleteLibr = async (req, res) => {
  const { id } = req.params;
  try {
    const lessLibs =
      await LibraryServ.deleteLibServ(id);
    if (lessLibs) {
      res.status(200).json({
        message:
          'Sadly the Library was deleted succesfully :(',
      });
    }
  } catch (error) {
    res.status(400).json({
      action: 'Delete one Library',
      message:
        'Luckily you could not delete the Library :)',
      error: error.message,
    });
  }
};

const modLib = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const modLibr =
      await LibraryServ.changeSomeLibDataServ(
        id,
        data
      );

    if (modLibr) {
      res.status(200).json({
        message: 'Data was modified succesfully',
      });
    }
  } catch (error) {
    res.status(400).json({
      action: 'Modify some Library data',
      error: error.message,
    });
  }
};

module.exports = {
  newLib,
  getOneLib,
  getAllLib,
  deleteLibr,
  modLib,
};
