import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './StylesControls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onTransaction: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    amount: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: Number(value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const type = e.target.name;
    if (this.state.amount <= 0) {
      this.notify('Введите сумму для проведения операции!');
      return;
    }
    if (
      e.target.name === 'Withdraw' &&
      this.props.balance < this.state.amount
    ) {
      this.notify('На счету недостаточно средств для проведения операции! ');
      return;
    }
    this.props.onTransaction({ ...this.state }, type);
    this.setState({
      amount: '',
    });
  };

  notify = msg => {
    toast.error(msg);
  };

  render() {
    const { amount } = this.state;
    return (
      <section className={styles.controls}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.label}>
            <input
              type="number"
              name="amount"
              value={amount}
              className={styles.inputStyles}
              onChange={this.handleChange}
            />
            <button
              type="button"
              name="Deposit"
              className={styles.buttonStyles}
              onClick={this.handleSubmit}
            >
              Deposit
            </button>
            <button
              type="button"
              name="Withdraw"
              className={styles.buttonStyles}
              onClick={this.handleSubmit}
            >
              Withdraw
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
    );
  }
}
