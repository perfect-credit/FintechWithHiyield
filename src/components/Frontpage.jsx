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
          <userCtx.Consumer>
            {user =>
              <groupCtx.Consumer>
                {group =>
                  <GroupTransactions group={group} user={user} />
                }
              </groupCtx.Consumer>
            }
          </userCtx.Consumer>
        </div>

        <Paper square>
          <groupCtx.Consumer>
            {group =>
              <userCtx.Consumer>
                {user => <OwnTransactions user={user} group={group} />}
              </userCtx.Consumer>
            }
          </groupCtx.Consumer>
        </Paper>
      </div>
    );
  }
}
