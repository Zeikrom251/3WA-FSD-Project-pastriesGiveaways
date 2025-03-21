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
import { useDispatch, useSelector } from "react-redux"
import {
  setShowAddForm,
  setShowEditForm,
  setCurrentPastry,
} from "../store/slice/pastrySlice"

const Admin = () => {
  const dispatch = useDispatch()
  const { data: pastries, refetch } = useGetPastriesQuery()
  const [addPastry] = useAddPastryMutation()
  const [deletePastry] = useDeletePastryMutation()
  const [updatePastry] = useUpdatePastryMutation()

  const { showAddForm, showEditForm, currentPastry } = useSelector(
    (state) => state.pastries
  )

  const handleAddPastry = async (pastryData) => {
    try {
      await addPastry(pastryData).unwrap()
      refetch()
      dispatch(setShowAddForm(false))
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error)
    }
  }

  const handleDeletePastry = async (id) => {
    try {
      await deletePastry(id).unwrap()
      refetch()
    } catch (error) {
      console.error("Erreur lors de la suppression :", error)
    }
  }

  const handleEditPastry = async (editedPastry) => {
    try {
      await updatePastry({ id: editedPastry.id, ...editedPastry }).unwrap()
      refetch()
      dispatch(setShowEditForm(false))
    } catch (error) {
      console.error("Erreur lors de la modification :", error)
    }
  }

  return (
    <>
      <Header />
      <div className="admin-page">
        <h2>Admin - Gestion des Pâtisseries</h2>
        <button
          className="add-pastry-btn"
          onClick={() => dispatch(setShowAddForm(true))}>
          Ajouter une Pâtisserie
        </button>

        {showAddForm && (
          <AddPastryForm
            onClose={() => dispatch(setShowAddForm(false))}
            onAddPastry={handleAddPastry}
          />
        )}

        {showEditForm && (
          <EditPastryForm
            pastry={currentPastry}
            onClose={() => dispatch(setShowEditForm(false))}
            onEditPastry={handleEditPastry}
          />
        )}

        {pastries && (
          <div className="table-container">
            <PastriesTable
              pastries={pastries}
              onDelete={handleDeletePastry}
              onEdit={(pastry) => {
                dispatch(setCurrentPastry(pastry))
                dispatch(setShowEditForm(true))
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
