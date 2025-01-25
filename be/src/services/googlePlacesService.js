const axios = require("axios");

const fetchAutocompleteData = async (input) => {
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input,
          key: "AIzaSyD8gbLiIryboeY_CoonrggrUv4LHEWtgfI",
          types: "establishment",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetchAutocompleteData:", error.message);
    throw new Error("Failed to fetch data from Google Places API");
  }
};

module.exports = { fetchAutocompleteData };