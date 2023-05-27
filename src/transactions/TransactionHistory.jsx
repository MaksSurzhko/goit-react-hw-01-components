import trans from "../transactions/transactions.json"
import "./transactions.css"

const transHistory = () => (
    <table className="transaction-history" >
  <thead>
    <tr className="transaction">
      <th className="transaction">Type</th>
      <th className="transaction">Amount</th>
      <th className="transaction">Currency</th>
            </tr>
    
        <tbody>
        {trans.map((itemsy) => (
        <tr key ={itemsy.id}>
      <td className="transaction">{itemsy.type}</td>
      <td className="transaction">{itemsy.amount}</td>
      <td className="transaction">{itemsy.currency}</td>
        </tr>
        ))}
        </tbody>
     </thead>
    
        </table>
)
   export default transHistory 
      