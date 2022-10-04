const express = require("express");
const app = express();

const routes = require("./routes");
const appConfig = require("./config/app");
const initializeDb = require("./initializers/db");

const NotFoundError = require("./errors/NotFoundError");

app.use(routes(express.Router()));

app.use((error, req, res, next) => {
  if (!(error instanceof NotFoundError)) next();

  res.status(404);
  next();
});

initializeDb().then(() => {
  app.listen(appConfig.port, () => {
    console.log(`Application listening on appConfig.port ${appConfig.port}`);
  });
});
