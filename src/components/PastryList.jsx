import { useGetPastriesQuery } from "../services/pastriesApi"
import "../styles/PastryList.style.css"

const PastryList = () => {
  const { data: pastries, error, isLoading } = useGetPastriesQuery()

  if (isLoading) return <p>Chargement...</p>
  if (error) return <p>Une erreur est survenue !</p>

  return (
    <div className="pastry-list">
      <h1>Lots de pâtisseries à gagner</h1>
      <div className="pastry-grid">
        {pastries.map((pastry) => (
          <div key={pastry.id} className="pastry-item">
            <img src={`/assets/${pastry.image}`} alt={pastry.name} />
            <div className="pastry-info">
              <p className="pastry-name">{pastry.name}</p>
              <p className="pastry-quantity">Restant : {pastry.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastryList
