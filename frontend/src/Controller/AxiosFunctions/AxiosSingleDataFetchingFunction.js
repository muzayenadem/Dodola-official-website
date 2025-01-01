import axios from "axios";

/**
 * Fetches data from the specified link using Axios.
 *
 * @param {string} link - The API endpoint to fetch data from.
 * @returns {Promise<any>} The fetched data.
 * @throws {Error} Throws an error if the request fails or if there is an issue with the response.
 */
export const axiosSingleDataFetchingNews = async (link) => {
  try {
    // Make the GET request
    const response = await axios.get(link);

    // Log the fetched data (optional)
    console.log("Data fetched successfully:", response.data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Server responded with a status code out of the 2xx range
      console.error("Server responded with an error:", error.response.data);
      throw new Error(error.response.data || "Server error occurred.");
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response received from the server. Please try again.");
    } else {
      // Error occurred while setting up the request
      console.error("Error setting up the request:", error.message);
      throw new Error(error.message || "Request setup error occurred.");
    }
  }
};
