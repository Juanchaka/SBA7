# Movie Search App

## Live Site
[Movie Search App](https://juanchaka.github.io/sba7)

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- OMDB API: The Open Movie Database API used to fetch movie data
- GitHub Pages: Used for hosting

## Approach Taken
1. Initialized a new Vite-React project and set up the basic folder structure.
2. Developed individual components (Header, SearchForm, MovieList) to maintain a modular and reusable code structure.
3. Implemented the OMDB API to use AJAX for retrieving movie data based on user searches.
4. Utilized React's useState hook for managing application state.
5. Implemented basic error handling for API requests and displays.
6. Applied CSS for a responsive and user-friendly interface.
7. Configured the project for deployment on GitHub Pages.

## Usage Instructions
1. Visit the live site link provided above.
2. Enter a movie title in the search bar.
3. Click the "Search" button or press Enter.
4. Browse through the list of movies that match your search query.

## Features
- Search for movies by title
- Display search results with movie posters, titles, and release years
- Responsive design for various screen sizes

## Unsolved Problems (Potential feature updates)
- Implement pagination for search results to handle large numbers of matches
- Add more detailed movie information on click
- Add advanced search options (by year, genre, etc.)

## Future Improvements
- Enhance error handling and user feedback for failed searches
- Implement caching to reduce API calls for repeated searches
- Integrate with a backend to allow user accounts and saved preferences

## Installation for Development
1. Clone the repository: `git clone https://github.com/juanchaka/sba7.git`
2. Navigate to the project directory: `cd sba7`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your OMDB API key: `VITE_APIKEY=your_api_key_here`
5. Start the development server: `npm run dev`