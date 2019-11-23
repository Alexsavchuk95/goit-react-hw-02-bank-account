import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './Styles.module.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default class Dashborad extends Component {
  state = {
    items: [],
  };

  onTransaction = (dataInput, typeName) => {
    const data = {
      ...dataInput,
      id: shortid(),
      date: new Date().toLocaleString(),
      type: typeName,
    };
    this.setState(prevState => ({
      items: [...prevState.items, data],
    }));
  };

  Sum = (items, typeTrancaction) => {
    return items
      .filter(el => el.type === typeTrancaction)
      .reduce((acc, el) => {
        let summ = acc;
        summ += el.amount;
        return summ;
      }, 0);
  };

  render() {
    const { items } = this.state;
    const income = this.Sum(items, 'Deposit');
    const expenses = this.Sum(items, 'Withdraw');
    const balance = income - expenses;
    return (
      <div className={styles.dashboard}>
        <Controls onTransaction={this.onTransaction} balance={balance} />
        <Balance income={income} expenses={expenses} balance={balance} />
        {!!items.length && <TransactionHistory items={items} />}
      </div>
    );
  }
}
