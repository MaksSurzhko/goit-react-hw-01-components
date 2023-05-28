import trans from "../transactions/transactions.json"
import tcss from "../transactions/transactions.module.css"

const transHistory = () => (
    <table className={tcss.transactionhistory} >
  <thead>
    <tr className={tcss.transactions}>
      <th className={tcss.transactions}>Type</th>
      <th className={tcss.transactions}>Amount</th>
      <th className={tcss.transactions}>Currency</th>
    </tr>
  </thead>
        <tbody>
        {trans.map((itemsy) => (
        <tr className={tcss.transaction} key ={itemsy.id}>
      <td className={tcss.transaction}>{itemsy.type}</td>
      <td className={tcss.transaction}>{itemsy.amount}</td>
      <td className={tcss.transaction}>{itemsy.currency}</td>
        </tr>
        ))}
        </tbody>
     
    
    </table>
)
   export default transHistory 
      