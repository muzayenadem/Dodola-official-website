import axios from "axios"

export const axiosToken = async (link) =>{
    try {
        // Replace with your server URL
    
        const response = await axios.get(link);
        console.log('Data fetched successfully:', response.data);
        
        // You can handle the response here, such as updating state in React
        //console.log({response:response.data})
        return response.data;
    
      } catch (error) {
        // Error handling
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Server responded with an error:', error.response.data);
          throw TypeError(error.response.data)
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request.data);
          throw Error(error.message)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
          throw Error(error.message)
        }
      
    }
}