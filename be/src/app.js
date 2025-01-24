const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsConfig");
const autocompleteRoutes = require("./routes/autoCompleteRoutes");

const app = express();

// Middleware
app.use(cors(corsOptions));

// Routes
app.use("/api", autocompleteRoutes);

module.exports = app;