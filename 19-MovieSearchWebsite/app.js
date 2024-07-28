
// Define the API URL
const apiUrl = 'https://api.themoviedb.org/3/movie/157336?api_key=f27f57ade17a44669e19a070d4e34fb1';

// Function to fetch movie data
async function fetchMovieData() {
  try {
    // Make the fetch request
    const response = await fetch(apiUrl);
    
    // Check if the response is okay (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON data
    const data = await response.json();
    
    // Log or use the data
    console.log(data);
  } catch (error) {
    // Handle errors (e.g., network issues, invalid API key)
    console.error('Error fetching the movie data:', error);
  }
}

// Call the function to fetch movie data
fetchMovieData();
