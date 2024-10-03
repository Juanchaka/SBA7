const API_KEY = process.env.APIKEYM;

export const searchMovies = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const searchRequest = new XMLHttpRequest();
    searchRequest.open('GET', `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`, true);
    
    searchRequest.onload = function() {
      if (searchRequest.status === 200) {
        const data = JSON.parse(searchRequest.responseText);
        resolve(data.Search || []);
      } else {
        reject('Error fetching data: ' + searchRequest.status);
      }
    };
    
    searchRequest.onerror = function() {
      reject('Request failed');
    };
    
    searchRequest.send();
  });
};