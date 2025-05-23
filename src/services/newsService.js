import axios from 'axios';

// Get the API endpoint from environment variables
// This will be updated to point to your deployed backend API
const API_BASE = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3001/api/news';

// When you deploy the backend to Vercel, update your .env file with:
// REACT_APP_API_ENDPOINT=https://your-backend-api-url.vercel.app/api/news

/**
 * Fetches all news headlines from the configured API endpoint
 * @returns {Promise<Array>} Array of news headline objects
 */
export const fetchNewsHeadlines = async () => {
  try {
    const response = await axios.get(API_BASE);
    
    // Validate the response data
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response format from API');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching news headlines:', error);
    throw error;
  }
};

/**
 * Fetches a random news headline from the API
 * @returns {Promise<Object>} A single news headline object
 */
export const fetchRandomHeadline = async () => {
  try {
    const response = await axios.get(`${API_BASE}/random`);
    
    // Validate the response data
    if (!response.data || !response.data.id) {
      throw new Error('Invalid response format from API');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching random headline:', error);
    throw error;
  }
};

/**
 * Fetches a specific news headline by ID
 * @param {string} id - The ID of the headline to fetch
 * @returns {Promise<Object>} A single news headline object
 */
export const fetchHeadlineById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    
    return response.data;
  } catch (error) {
    console.error(`Error fetching headline with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Example response format expected from the API:
 * [
 *   {
 *     id: "1",
 *     title: "Breaking News Headline",
 *     imageUrl: "https://example.com/image1.jpg", // Optional, may be missing
 *     url: "https://example.com/news/1"
 *   },
 *   ...
 * ]
 */
