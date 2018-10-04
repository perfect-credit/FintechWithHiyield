import * as React from "react";

import { Transaction } from "./Transaction.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export class OwnTransactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.user || this.props.user == prevProps.user) return;
    fetch(`http://localhost:8080/account/${this.props.user.account.id}/transactions`)
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }));
  }

  render() {
    return (
      <div>
        <Transaction type="manual">
          <OwnTransactionSubMenu />
        </Transaction>

        <br/>

        {this.state.transactions.map((t) => (
          <Transaction key={t.id} type="own" name={t.creditorName} date={t.transactionDate} amount={t.localAmount.amount} currencyCode={t.localAmount.currencyCode}>
            <OwnTransactionSubMenu amount={t.localAmount.amount} />
          </Transaction>
        ))}
      </div>
    )
  }
}
