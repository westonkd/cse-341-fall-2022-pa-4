const express = require("express");
const router = express.Router();
const {
  index,
  show,
  update,
  create,
  destroy,
} = require("../controllers/contacts.controller");

// Show a single contact
router.get("/:id", show);

// Create a contact
router.post("/", create);

// List all contacts
router.get("/", index);

// Update a contact
router.put("/:id", update);

// Destroy a contact
router.delete("/:id", destroy);

module.exports = router;
