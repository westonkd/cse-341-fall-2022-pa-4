const Contact = require("../models/Contact");

const index = async (req, res) => {
  const { firstName } = req.query;
  const contacts = await Contact.findAll({ firstName });
  res.json(contacts);
};

const show = async (req, res, next) => {
  // #swagger.description = 'Show a single Contact'

  try {
    const document = await Contact.find(req.params.id);
    res.json(document);
  } catch (e) {
    next(e);
  }
};

const destroy = async (req, res, next) => {
  // #swagger.description = 'Destroy a Contact'

  try {
    await Contact.destroy(req.params.id);

    res.status(200);
    res.end();
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  // #swagger.description = 'Update a Contact'

  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    await Contact.update(req.params.id, {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    res.status(204);
    res.json(req.body);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  // #swagger.description = 'Create a new Contact'

  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const response = await Contact.create({
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    });

    res.status(201);
    res.json({ _id: response.insertedId });
  } catch (e) {
    next(e);
  }
};

module.exports = { index, show, update, create, destroy };
