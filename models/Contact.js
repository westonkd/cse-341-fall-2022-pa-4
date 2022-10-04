const getDB = require("../initializers/db");
const { ObjectId } = require("mongodb");
const NotFoundError = require("../errors/NotFoundError");

class Contact {
  static findAll = async (query) => {
    const filter = this._compactedObject(query);
    const collection = await this._collection();
    const documents = await collection.find(filter).toArray();

    return documents;
  };

  static find = async (id) => {
    const collection = await this._collection();
    const document = await collection.find({ _id: ObjectId(id) }).toArray();
    if (document[0]) return document[0];

    throw new NotFoundError(id);
  };

  static destroy = async (id) => {
    const collection = await this._collection();
    const result = await collection.remove({ _id: ObjectId(id) }, true);

    return result;
  };

  static update = async (id, params) => {
    const collection = await this._collection();

    return await collection.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: this._compactedObject(params),
      }
    );
  };

  static create = async (params) => {
    const collection = await this._collection();

    return await collection.insertOne(params);
  };

  static _collection = async () => {
    try {
      const db = await getDB();
      return db.collection("contacts");
    } catch (error) {
      console.error("Error getting contacts collection", error);
    }
  };

  static _compactedObject = (object) =>
    Object.fromEntries(Object.entries(object).filter(([_k, v]) => v));
}

module.exports = Contact;
