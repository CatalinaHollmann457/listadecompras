import { useState } from 'react'
import AddItemForm from './components/AddItemForm'
import ShoppingList from './components/ShoppingList'
import './App.css';

function App() {
  const [items, setItems] = useState([])

  const addItem = (newItems) => {
    const alreadyExists = (name) =>
      items.some((item) => item.name.toLowerCase() === name.toLowerCase())

    const filteredItems = newItems.filter((item) => {
      if (alreadyExists(item.name)) {
        alert('El producto "${item.name}" ya fue agregado.')
        return false
      }
      return true
    })

    if (items.length + filteredItems.length > 3) {
      alert('Solo se pueden agregar hasta 3 productos distintos.')
      return
    }

    setItems((prevItems) => [...prevItems, ...filteredItems])
  }

  const removeItem = (indexToRemove) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove))
  }

  const toggleBought = (index) => {
    setItems((prevItems) => {
      const updated = prevItems.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
  
      const unbought = updated.filter(item => !item.bought)
      const bought = updated.filter(item => item.bought)
      return [...unbought, ...bought]
    })
  }
  

  return (
    <div className="app-container">
      <h1>Lista de Compras</h1>
      <AddItemForm onAddItem={addItem} />
      <ShoppingList items={items} onRemoveItem={removeItem} onToggleBought={toggleBought} />
    </div>
  )
}

export default App