import * as React from "react";

import { Typography } from "@material-ui/core";

import { GroupTransactions } from "./GroupTransactions.jsx"
import { OwnTransactions } from "./OwnTransactions.jsx";

import "../stylesheets/frontpage.scss";

export class Frontpage extends React.Component {
  render() {
    return (
      <div className="frontpage">
        <div>
          <Typography variant="display1">
            Gruppebetalinger
          </Typography>
          <br />
          <GroupTransactions />
        </div>

        <div>
          <Typography variant="display1">
            Dine siste transaksjoner
          </Typography>
          <br />
          <OwnTransactions />
        </div>
      </div>
    );
  }
}
