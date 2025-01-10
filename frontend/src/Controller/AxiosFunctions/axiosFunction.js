import axios from "axios";

export const axiosFunction = async (link) =>{
    try {
        // Replace with your server URL
    
        const response = await axios.get(link);
        console.log('Data fetched successfully:', response.data);
        
        // You can handle the response here, such as updating state in React
        return response.data;
    
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          // Server responded with a status code out of the 2xx range
          console.error("Server responded with an error:", error.response.data);
          throw new Error(error.response.data.error || "Server error occurred.");
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
}

