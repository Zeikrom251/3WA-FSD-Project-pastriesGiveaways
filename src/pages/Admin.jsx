import { useState } from "react"
import {
  useAddPastryMutation,
  useDeletePastryMutation,
  useGetPastriesQuery,
  useUpdatePastryMutation,
} from "../services/pastriesApi"
import AddPastryForm from "../components/AddPastryForm"
import EditPastryForm from "../components/EditPastryForm"
import PastriesTable from "../components/PastriesTable"
import "../styles/Admin.style.css"
import Header from "../components/Header"

const Admin = () => {
  const { data: pastries, refetch } = useGetPastriesQuery()
  const [addPastry] = useAddPastryMutation()
  const [deletePastry] = useDeletePastryMutation()
  const [updatePastry] = useUpdatePastryMutation()

  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [currentPastry, setCurrentPastry] = useState(null)

  const handleAddPastry = async (e) => {
    e.preventDefault()
    try {
      await addPastry(newPastry)
      refetch()
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error)
    }
  }

  const handleDeletePastry = async (id) => {
    try {
      await deletePastry(id)
      refetch()
    } catch (error) {
      console.error("Erreur lors de la suppression :", error)
    }
  }

  const handleEditPastry = async (updatePastry) => {
    try {
      await updatePastry(updatePastry)
      refetch()
    } catch (error) {
      console.error("Erreur lors de la modification :", error)
    }
  }

  return (
    <>
      <Header />
      <div className="admin-page">
        <h2>Admin - Gestion des Pâtisseries</h2>
        <button className="add-pastry-btn" onClick={() => setShowAddForm(true)}>
          Ajouter une Pâtisserie
        </button>

        {showAddForm && (
          <AddPastryForm
            onClose={() => setShowAddForm(false)}
            onAddPastry={handleAddPastry}
          />
        )}

        {showEditForm && (
          <EditPastryForm
            pastry={currentPastry}
            onClose={() => setShowEditForm(false)}
            onEditPastry={handleEditPastry}
          />
        )}

        {pastries && (
          <div className="table-container">
            <PastriesTable
              pastries={pastries}
              onDelete={handleDeletePastry}
              onEdit={(pastry) => {
                setCurrentPastry(pastry)
                setShowEditForm(true)
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
