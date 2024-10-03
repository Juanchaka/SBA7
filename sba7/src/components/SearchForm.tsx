import React, { useState } from 'react';

function SearchForm({ onSearch }){
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;