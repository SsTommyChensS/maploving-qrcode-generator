const express = require("express");
const { getAutocomplete } = require("../controllers/autocompleteController");

const router = express.Router();

router.get("/autocomplete", getAutocomplete);

module.exports = router;