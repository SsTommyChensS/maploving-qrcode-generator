const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsConfig");
const autocompleteRoutes = require("./routes/autoCompleteRoutes");

const app = express();

// Middleware
app.use(cors(corsOptions));
app.options("", cors(corsConfig));

// Routes
app.use("/api", autocompleteRoutes);

module.exports = app;