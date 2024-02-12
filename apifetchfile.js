// Function to fetch data from the API
async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  // Example API endpoint
  const apiUrl = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
  
  // Function to fetch data and store it in an array
  async function getDataAndStoreInArray() {
    try {
      const dataArray = await fetchData(apiUrl);
  
      // You can now work with dataArray
      console.log(dataArray);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to start fetching and storing data
  getDataAndStoreInArray();
  