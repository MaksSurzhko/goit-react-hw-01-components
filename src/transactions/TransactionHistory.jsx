import trans from "../transactions/transactions.json"

const transHistory = () => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        <tbody>
        {trans.map((itemsy) => (
        <tr>
      <td>{itemsy.type}</td>
      <td>{itemsy.amount}</td>
      <td>{itemsy.currency}</td>
        </tr>
        ))}
        </tbody>
     
    </thead>
        </table>
)
   export default transHistory 
      