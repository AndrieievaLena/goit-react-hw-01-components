import PropTypes from "prop-types";
import s from  "./Transaction.module.css"
const TransactionHistory = ({ type, amount ,currency }) => {
    return (
        <table className="TransactionHistory">
            <thead>
                <tr className={s.section}>
                    <th className={s.type}>Type</th>
                    <th className={s.amount}>Amount</th>
                    <th className={s.currency}>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr className={s.tsection}>
                    <td className={s.transaction}>{type}</td>
                    <td className={s.transaction}>{amount}</td>
                    <td className={s.transaction}>{currency}</td>
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