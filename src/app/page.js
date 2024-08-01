// src/app/page.js
"use client"; // Add this line at the top

import { useState } from 'react';
import ItemForm from '@/components/ItemForm';
import ItemList from '@/components/ItemList';
import SearchBar from '@/components/SearchBar';
import styles from './page.module.css'; // Import CSS module

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleSave = () => {
    setCurrentItem(null); // Clear the form after saving
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Pantry Tracker</h1>
      <ItemForm currentItem={currentItem} onSave={handleSave} />
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <ItemList searchTerm={searchTerm} onEdit={handleEdit} />
    </div>
  );
}
