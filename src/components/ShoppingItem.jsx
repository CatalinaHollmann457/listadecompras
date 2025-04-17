import React from 'react';
import '../App.css';

function ShoppingItem({ item, onRemove, onToggle }) {
  return (
    <li className={`shopping-item ${item.bought ? 'bought' : ''}`}>
      <span>
        {item.name} - Cantidad: {item.quantity}
      </span>
      <div style={{ marginTop: '8px' }}>
        <button onClick={onToggle}>
          {item.bought ? 'Desmarcar' : 'Comprado'}
        </button>
        <button onClick={onRemove} style={{ marginLeft: '8px' }}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default ShoppingItem;