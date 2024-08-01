// src/components/ItemForm.js
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import styles from './ItemForm.module.css'; // Import CSS module

const ItemForm = ({ currentItem, onSave }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('');

  useEffect(() => {
    if (currentItem) {
      setItemName(currentItem.name);
      setCategory(currentItem.category);
      setExpirationDate(currentItem.expirationDate);
      setQuantity(currentItem.quantity);
      setUnit(currentItem.unit);
    }
  }, [currentItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = {
      name: itemName,
      category,
      expirationDate,
      quantity: Number(quantity),
      unit,
    };

    try {
      if (currentItem) {
        const itemRef = doc(db, 'pantryItems', currentItem.id);
        await updateDoc(itemRef, itemData);
        onSave();
      } else {
        await addDoc(collection(db, 'pantryItems'), itemData);
        onSave();
      }
    } catch (error) {
      console.error('Error saving item: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>{currentItem ? 'Update Item' : 'Add Item'}</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
        required
        className={styles.input}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
        className={styles.input}
      />
      <input
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        placeholder="Expiration Date"
        required
        className={styles.input}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        min="1"
        required
        className={styles.input}
      />
      <input
        type="text"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        placeholder="Unit"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        {currentItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemForm;
