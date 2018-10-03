import * as React from "react";

import { GroupTransactions } from "./GroupTransactions.jsx"
import { OwnTransactions } from "./OwnTransactions.jsx";

import "../stylesheets/frontpage.scss";

export class Frontpage extends React.Component {
  render() {
    return (
      <div className="frontpage">
        <GroupTransactions />

        <OwnTransactions />
      </div>
    );
  }
}
