import { useEffect, useState } from "react"
import "../styles/EditPastryForm.style.css"

const EditPastryForm = ({ pastry, onClose, onEditPastry }) => {
  const [editedPastry, setEditedPastry] = useState(pastry)

  useEffect(() => {
    setEditedPastry(pastry)
  }, [pastry])

  const handleSubmit = (e) => {
    e.preventDefault()
    onEditPastry(editedPastry)
    onClose()
  }

  return (
    <div className="editPastryForm-modal">
      <div className="editPastryForm-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h3>Modifier la Pâtisserie</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedPastry.name}
            onChange={(e) =>
              setEditedPastry({ ...editedPastry, name: e.target.value })
            }
            required
          />
          <input
            type="text"
            value={editedPastry.image}
            onChange={(e) =>
              setEditedPastry({ ...editedPastry, image: e.target.value })
            }
            required
          />
          <input
            type="number"
            value={editedPastry.quantity}
            onChange={(e) =>
              setEditedPastry({ ...editedPastry, quantity: e.target.value })
            }
            required
          />
          <button type="submit">Modifier</button>
        </form>
      </div>
    </div>
  )
}

export default EditPastryForm
