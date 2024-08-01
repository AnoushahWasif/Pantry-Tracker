// src/components/ItemList.js
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from './ItemList.module.css'; // Import CSS module

const ItemList = ({ searchTerm, onEdit }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'pantryItems'));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'pantryItems', id));
      fetchItems(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  const filteredItems = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  return (
    <ul className={styles.list}>
      {filteredItems.map(item => (
        <li key={item.id} className={styles.item}>
          <div className={styles.itemInfo}>
            <strong>{item.name}</strong> - {item.category} - Expiration: {item.expirationDate} - Quantity: {item.quantity} {item.unit}
          </div>
          <div className={styles.itemActions}>
            <button onClick={() => onEdit(item)} className={styles.button}>Edit</button>
            <button onClick={() => handleDelete(item.id)} className={styles.button}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
