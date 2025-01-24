import axios from "axios";

export const fetchBusinessDetails = async (searchTerm) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/autocomplete`, {
      params: { input: searchTerm },
    });
    return response.data.data.predictions;
  } catch (error) {
    console.error("Error fetching business details:", error);
    throw error; 
  }
};