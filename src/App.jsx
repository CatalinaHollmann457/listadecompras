import { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const alreadyExists = items.some(
      (existingItem) => existingItem.name.toLowerCase() === item.name.toLowerCase()
    );

    if (alreadyExists) {
      alert(`El producto "${item.name}" ya fue agregado.`);
      return;
    }

    setItems((prevItems) => [...prevItems, { ...item, bought: false }]);
  };

  const removeItem = (indexToRemove) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const toggleBought = (index) => {
    setItems((prevItems) => {
      const updated = prevItems.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      );

      const unbought = updated.filter((item) => !item.bought);
      const bought = updated.filter((item) => item.bought);
      return [...unbought, ...bought];
    });
  };

  return (
    <div className="app-container">
      <h1>Lista de Compras</h1>
      <AddItemForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onRemoveItem={removeItem}
        onToggleBought={toggleBought}
      />
    </div>
  );
}

export default App;
