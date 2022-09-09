import './TransactionsHistory.css'
import {Transaction} from './Transaction'
export const TransactionsHistory = ({ transactions }) => {

    return (
        <div className='TransactionsContainer'>
           
            <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                    {transactions.map((transaction, index) => {
                        
                        return (
                            <Transaction index={index} key={transaction.id} id={transaction.id} type = { transaction.type } amount = { transaction.amount } currency = {transaction.currency} />
                    )})}
  </tbody>
</table>
        </div>
    )

}

