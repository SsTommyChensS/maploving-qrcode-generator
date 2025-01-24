const { fetchAutocompleteData } = require("../services/googlePlacesService");
const baseDTO = require("../dtos/baseDTO");

const getAutocomplete = async (req, res) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json(baseDTO(false, "Input is required"));
  }

  try {
    const data = await fetchAutocompleteData(input);
    res.json(baseDTO(true, "Data fetched successfully", data));
  } catch (error) {
    console.error("Error in getAutocomplete:", error.message);
    res.status(500).json(baseDTO(false, "Failed to fetch data from Google Places API"));
  }
};

module.exports = { getAutocomplete };
