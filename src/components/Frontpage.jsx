import * as React from "react";

import { Typography, Paper } from "@material-ui/core";

import { GroupTransactions } from "./GroupTransactions.jsx"
import { OwnTransactions } from "./OwnTransactions.jsx";

import { groupCtx } from "../contexts/group.jsx";
import { userCtx } from "../contexts/user.jsx";

import "../stylesheets/frontpage.scss";

export class Frontpage extends React.Component {
  render() {
    return (
      <div className="frontpage">
        <div>
          <Typography variant="title" color="inherit">
            <groupCtx.Consumer>
              {group => group ? group.name : "Ingen gruppe valgt" }
            </groupCtx.Consumer>
          </Typography>
          <GroupTransactions />
        </div>

        <Paper square>
          <userCtx.Consumer>
            {user => <OwnTransactions user={user}/>}
          </userCtx.Consumer>
        </Paper>
      </div>
    );
  }
}
