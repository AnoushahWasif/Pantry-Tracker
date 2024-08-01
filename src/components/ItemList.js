// src/components/ItemList.js
import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure this path is correct
import { collection, getDocs } from 'firebase/firestore';

const ItemList = ({ searchTerm }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'pantryItems'));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  return (
    <ul style={styles.list}>
      {filteredItems.map(item => (
        <li key={item.id} style={styles.item}>
          <strong>{item.name}</strong> - {item.category} - Expiration: {item.expirationDate} - Quantity: {item.quantity} {item.unit}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default ItemList;
