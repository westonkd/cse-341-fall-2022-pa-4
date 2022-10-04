const express = require("express");
const openCors = require("../middleware/openCors");

const routes = (router) => {
  router.use([openCors, express.json()]);

  router.use("/contacts", require("./contacts.routes"));
  router.use("/api-docs", require("./docs.routes"));

  return router;
};

module.exports = routes;
