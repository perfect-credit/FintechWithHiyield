import * as React from "react";

import { Transaction } from "./Transaction.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export class OwnTransactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
    }

    this.submitGroupTransaction = this.submitGroupTransaction.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.user || this.props.user == prevProps.user) return;
    fetch(`http://localhost:8080/account/${this.props.user.account.id}/transactions`)
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }));
  }

  submitGroupTransaction(name, id) {
    fetch("http://localhost:8080/paymentrequest", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Math.round(Math.random() * 100000),
        groupId: this.props.group.id,
        amount: this.state.transactions.find((t) => t.id = id).localAmount.amount,
        date: (new Date()).toUTCString(),
        name,
        requestUserId: this.props.user.id,
        resolved: false,
        userPaymentDues: this.props.group.users.map((u) => ({ userId: u.id, amount: this.state.transactions.find(t => t.id == id ).localAmount.amount / this.props.group.users.length, hasPayed: (u.id == this.props.user.id) }))
      })
    })
      .then(r => r.json())
      .then(gt => console.table(gt))
  }

  render() {
    return (
      <div>
        <Transaction type="manual">
          <OwnTransactionSubMenu />
        </Transaction>

        <br/>

        {this.state.transactions.map((t) => (
          <Transaction key={t.id} type="own" transaction={t}>
            <OwnTransactionSubMenu id={t.id} name={t.creditorName} amount={t.localAmount.amount} submitGroupTransaction={this.submitGroupTransaction} />
          </Transaction>
        ))}
      </div>
    )
  }
}
