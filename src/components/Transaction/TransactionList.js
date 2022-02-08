import PropTypes from "prop-types";
import "./Transaction.css"
const TransactionHistory = ({ type, amount ,currency }) => {
    return (
        <table className="TransactionHistory">
            <thead>
                <tr className="sectiontransaction">
                    <th className="typetransaction">Type</th>
                    <th className="amounttransaction">Amount</th>
                    <th className="currencytransaction">Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="transactiontype">{type}</td>
                    <td className="transactionamount">{amount}</td>
                    <td className="transactioncurrency">{currency}</td>
                </tr>
              
            </tbody>
        </table>
    );
};
TransactionHistory.protoTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};
export default TransactionHistory;