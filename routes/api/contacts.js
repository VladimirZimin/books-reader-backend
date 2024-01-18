const express = require("express");

const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const allContacts = await contacts.listContacts();
  res.json(allContacts);
});

router.get("/:contactId", async (req, res, next) => {
  const id = req.url.slice(2, req.url.length);
  const contactById = await contacts.getContactById(id);
  res.json(contactById);
});

router.post("/", async (req, res, next) => {
  const addContact = await contacts.getContactById(req.body);
  res.json(addContact);
});

router.delete("/:contactId", async (req, res, next) => {
  // const id = req.url.slice(2, req.url.length);
  res.json();
});

router.put("/:contactId", async (req, res, next) => {
  // const id = req.url.slice(2, req.url.length);
  res.json();
});

module.exports = router;
