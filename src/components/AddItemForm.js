// src/components/AddItemForm.js
import { useState } from 'react';
import { db } from '../../firebase'; // Ensure this path is correct
import { collection, addDoc } from 'firebase/firestore';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemName || !category || !expirationDate || !unit) return;

    try {
      const docRef = await addDoc(collection(db, 'pantryItems'), {
        name: itemName,
        category,
        expirationDate,
        quantity: Number(quantity), // Ensure quantity is a number
        unit,
        createdAt: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      // Clear the input fields after submission
      setItemName('');
      setCategory('');
      setExpirationDate('');
      setQuantity(1);
      setUnit('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Item Name"
        required
        style={styles.input}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
        style={styles.input}
      />
      <input
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        placeholder="Expiration Date"
        required
        style={styles.input}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        min="1"
        required
        style={styles.input}
      />
      <input
        type="text"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        placeholder="Unit"
        required
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Item</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default AddItemForm;
