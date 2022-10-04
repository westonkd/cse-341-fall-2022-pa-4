const { MongoClient, ServerApiVersion } = require("mongodb");
const dbConfig = require("../config/db");

// For memoizing the db
let db;

const initialize = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(dbConfig.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    console.log("Connected successfully to DB");
    db = client.db(dbConfig.name);

    return db;
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = initialize;
