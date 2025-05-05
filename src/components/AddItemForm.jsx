import React, { useState } from 'react';
import '../App.css';

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('El nombre del producto no puede estar vacío.');
      return;
    }

    if (quantity <= 0) {
      alert('La cantidad debe ser mayor a 0.');
      return;
    }

    onAddItem({ name: name.trim(), quantity });
    setName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="product-input-group">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddItemForm;
