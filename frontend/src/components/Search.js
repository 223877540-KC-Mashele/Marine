import React from 'react';

const Search = ({ searchValue, setSearchValue }) => (
  <div id="search-container">
    <input
      type="text"
      id="search-input"
      placeholder="Search marine species..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <button id="search-button">Search</button>
  </div>
);

export default Search;

