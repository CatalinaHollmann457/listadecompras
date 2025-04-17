import React, { useState } from 'react';
import '../App.css';

function AddItemForm({ onAddItem }) {
  const [products, setProducts] = useState([
    { name: '', quantity: 1 },
    { name: '', quantity: 1 },
    { name: '', quantity: 1 }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = field === 'quantity' ? parseInt(value) : value;
    setProducts(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validItems = products.filter(p => p.name.trim() !== '' && p.quantity > 0 && p.quantity <= 8);

    const hasDuplicates = new Set(validItems.map(p => p.name.toLowerCase())).size !== validItems.length;
    if (hasDuplicates) {
      alert('No se pueden repetir nombres de productos.');
      return;
    }

    if (validItems.length === 0) {
      alert('Ingresá al menos un producto válido.');
      return;
    }

    const finalItems = validItems.map(p => ({ ...p, bought: false }));
    onAddItem(finalItems);
    setProducts([
      { name: '', quantity: 1 },
      { name: '', quantity: 1 },
      { name: '', quantity: 1 }
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {products.map((product, index) => (
        <div key={index} className="product-input-group">
          <input
            type="text"
            placeholder={`Producto ${index + 1}`}
            value={product.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
        />
          <input
            type="number"
            min="1"
            max="8"
            value={product.quantity}
            onChange={(e) => handleChange(index, 'quantity', e.target.value)}
        />
        </div>
      ))}
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddItemForm;