const swaggerAutogen = require("swagger-autogen")();
const appConfig = require("./config/app");

const doc = {
  info: {
    title: "Contacts API",
    description: "CSE 341",
  },
  host: appConfig.host,
  schemes: ["http"],
};

const outputFile = "./swagger-docs.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
