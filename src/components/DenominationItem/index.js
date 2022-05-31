import './index.css'

const DenominationItem = props => {
  const {amountInRupees, deleteUser} = props
  const {id, value} = amountInRupees
  const onDelete = () => {
    deleteUser(value)
  }

  return (
    <li className="user-card-container">
      <button type="button" className="button-style" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
