export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulating a successful API response
      resolve({ data: 'Sample API response data' });
    }, 1000);
  });
}
