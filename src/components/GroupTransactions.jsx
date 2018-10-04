import * as React from "react";

// Later this will be gone
import { Transaction } from "./Transaction.jsx";
import { GroupTransactionSubMenu } from "./GroupTransactionSubMenu.jsx";

import { groupCtx } from "../contexts/group.jsx";
import { userCtx } from "../contexts/user.jsx";

import { Typography, Divider } from "@material-ui/core";

import "../stylesheets/group-transactions.scss";

export class GroupTransactions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.group || this.props.group == prevProps.group) return;
    fetch(`http://localhost:8080/paymentrequest/${this.props.group.id}`)
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }));
  }
  
  render() {
    return(
      <userCtx.Consumer>
        { user =>
          <groupCtx.Consumer>
            { group =>
              <div className="group-transactions">
                <Typography variant="display3">
                  {group ? group.name : "Ingen gruppe valgt" }
                </Typography>
                <Divider />
                <br/>
                {
                  this.state.transactions.reverse().map((t) => (
                    <Transaction type="group" key={t.id} transaction={t} group={group} user={user}>
                      <GroupTransactionSubMenu transaction={t} group={group} />
                    </Transaction>
                  ))
                }
              </div>
            }
          </groupCtx.Consumer>
            }
      </userCtx.Consumer>
    )
  }
}
