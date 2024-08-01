// src/app/page.js
"use client"; // Add this line at the top

import { useState } from 'react';
import AddItemForm from '@/components/AddItemForm';
import ItemList from '@/components/ItemList';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={styles.container}>
      <h1>Pantry Tracker</h1>
      <AddItemForm />
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <ItemList searchTerm={searchTerm} />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
};
