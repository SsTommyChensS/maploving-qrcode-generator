const express = require("express");
const { getAutocomplete } = require("../controllers/autoCompleteController");

const router = express.Router();

router.get("/autocomplete", getAutocomplete);

module.exports = router;