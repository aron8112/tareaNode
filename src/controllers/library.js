const { LibraryServ } = require('../services');
const {
  addBooksServ,
} = require('../services/library');

const newLib = async (req, res) => {
  const library = req.body;
  try {
    const createLib =
      await LibraryServ.newLibServ(library);
    return res.status(201).json({
      message: `The new Library ${createLib.name} was created successfully! Check the data below: `,
      createLib,
    });
  } catch (error) {
    return res.status(400).json({
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
    return res.status(200).json(getOne);
  } catch (error) {
    return res.status(400).json({
      action: 'Get one Library',
      error: error.message,
    });
  }
};

const getAllLib = async (_req, res) => {
  try {
    const getOne =
      await LibraryServ.getAllLibServ();
    return res.status(200).json(getOne);
  } catch (error) {
    return res.status(400).json({
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
      return res.status(200).json({
        message:
          'Sadly the Library was deleted succesfully :(',
      });
    }
  } catch (error) {
    return res.status(400).json({
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
      return res.status(200).json({
        message: 'Data was modified succesfully',
      });
    }
  } catch (error) {
    return res.status(400).json({
      action: 'Modify some Library data',
      error: error.message,
    });
  }
};
const addBookInLib = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  console.log(`Library id: ${id}, booK: ${book}`);
  try {
    const foundLib =
      await LibraryServ.getOneLibServ(id);
    if (foundLib) {
      const addBook =
        await LibraryServ.addBooksServ(id, book);
      return res.status(201).json({
        message: `The book was added successfully to ${foundLib.name} Library`,
        addBook,
      });
    }
    return res.status(404).json({
      message: `The Library with ID: ${id} was not found`,
    });
  } catch (error) {
    return res.status(400).json({
      action: 'Adding a book in the Library',
      error: error.message,
    });
  }
};

module.exports = {
  newLib,
  addBookInLib,
  getOneLib,
  getAllLib,
  deleteLibr,
  modLib,
};
