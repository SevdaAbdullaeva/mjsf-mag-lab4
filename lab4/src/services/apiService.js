export const apiService = {
    fetchData(endpoint) {
      return fetch(endpoint).then(response => response.json());
    }
  };