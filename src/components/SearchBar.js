// src/components/SearchBar.js
"use client";  // Add this line at the top

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    onSearch(searchTerm); // Call the onSearch prop
  };

  return (
    <input
      type="text"
      placeholder="Search pantry items..."
      value={query}
      onChange={handleSearch}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
};

export default SearchBar;
