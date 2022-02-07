import TransactionHistory from "./TransactionList"

const TransactionList = ({ items }) => {
    return (
        <div>
            {items.map(item => (
                <TransactionHistory
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                
                
                />

            ))}
        </div>
    )
};

export default TransactionList;