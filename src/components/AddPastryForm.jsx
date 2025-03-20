import { useState } from "react"
import "../styles/AddPastryForm.style.css"

const AddPastryForm = ({ onClose, onAddPastry }) => {
  const [newPastry, setNewPastry] = useState({
    name: "",
    image: "",
    quantity: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddPastry(newPastry)
    onClose()
  }

  return (
    <div className="addPastryForm-modal">
      <div className="addPastryForm-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>Ajouter une Pâtisserie</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom de la pâtisserie"
            value={newPastry.name}
            onChange={(e) =>
              setNewPastry({ ...newPastry, name: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="URL de l'image"
            value={newPastry.image}
            onChange={(e) =>
              setNewPastry({ ...newPastry, image: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Quantité"
            value={newPastry.quantity}
            onChange={(e) =>
              setNewPastry({ ...newPastry, quantity: e.target.value })
            }
            required
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  )
}

export default AddPastryForm
