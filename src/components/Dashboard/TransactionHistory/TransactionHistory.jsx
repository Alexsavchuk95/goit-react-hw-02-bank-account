import React from 'react';
import PropTypes from 'prop-types';
import styles from './StylesTransaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead>
      <tr className={styles.trStyle}>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {items.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount} $</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
