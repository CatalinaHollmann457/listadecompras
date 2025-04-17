import React from 'react';
import ShoppingItem from './ShoppingItem';
import '../App.css'; 

function ShoppingList({ items, onRemoveItem, onToggleBought }) {
  return (
    <ul className="shopping-list">
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          index={index}
          onRemove={() => onRemoveItem(index)}
          onToggle={() => onToggleBought(index)}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;