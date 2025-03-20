const PastriesTable = ({ pastries, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Nom</th>
          <th>Quantité Restante</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pastries.map((pastry) => (
          <tr key={pastry.id}>
            <td>
              <img
                src={`/assets/${pastry.image}`}
                alt={pastry.name}
                width={50}
              />
            </td>
            <td>{pastry.name}</td>
            <td>{pastry.quantity}</td>
            <td>
              <button onClick={() => onEdit(pastry.id)}>Modifier</button>
              <button onClick={() => onDelete(pastry.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PastriesTable
