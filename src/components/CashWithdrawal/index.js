import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    totalAmount: 2000,
  }

  deleteUser = value => {
    const {totalAmount} = this.state

    this.setState(prevState => ({totalAmount: prevState.totalAmount - {props.value}}))
  }

  render() {
    const {denominationsList} = this.props
    const {id, value} = denominationsList
    const {totalAmount} = this.state

    return (
      <div className="app-container">
        <div className="sub-container">
          <div className="first-circle">
            <div className="circle">
              <div className="round-circle">
                <p>S</p>
              </div>
              <p className="heading">Sarah Williams</p>
            </div>
          </div>
          <div className="balance-style">
            <p className="heading-balance">Your Balance</p>
            <div>
              <p className="heading">{totalAmount}</p>
              <p className="heading-balance">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="heading-balance">CHOOSE SUM (IN RUPEES)</p>

          <ul className="list-container">
            {denominationsList.map(eachNote => (
              <DenominationItem
                amountInRupees={eachNote}
                key={eachNote.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
