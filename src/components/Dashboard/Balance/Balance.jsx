import React from 'react';
import PropTypes from 'prop-types';
import styles from './StylesBalance.module.css';

const Balance = ({ balance, income, expenses }) => (
  <section className={styles.balance}>
    <span role="img" aria-label="Up">
      ⬆️ {income}$
    </span>
    <span role="img" aria-label="Down">
      ⬇️ {expenses}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
