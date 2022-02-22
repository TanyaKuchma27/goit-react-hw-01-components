import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.table}>
            <thead className={s.thead}>
                <tr>
                    <th className={s.head}>Type</th>
                    <th className={s.head}>Amount</th>
                    <th className={s.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={s.row}>
                        <td className={`${s.data} ${s.type}`}>{type}</td>
                        <td className={`${s.data} ${s.center}`}>{amount}</td>
                        <td className={`${s.data} ${s.center}`}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>    
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;