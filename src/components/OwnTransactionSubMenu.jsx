import * as React from "react";

import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@material-ui/core";

import { groupCtx } from "../contexts/group.jsx";
import { userCtx } from "../contexts/user.jsx";

export class OwnTransactionSubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.submitGroupTransaction = this.submitGroupTransaction.bind(this);
    this.nameInput = React.createRef()
  }

  submitGroupTransaction() {
    this.props.submitGroupTransaction(this.nameInput.current.props.value, this.props.id);
  }

  render() {
    return (
      <userCtx.Consumer>
        {user =>
          (
            <groupCtx.Consumer>
              {group =>
                (
                  <>
                    <TextField
                      id="to-pay"
                      label="Navn på gruppebetaling"
                      type="text"
                      ref={this.nameInput}
                      value={this.props.name}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="normal"
                      style={{ width: "100%" }}
                    />
                    <Divider />
                    <Table className="users-table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Navn</TableCell>
                          <TableCell>Å betale</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          group.users.map((u) => (
                            <TableRow key={u.id}>
                              <TableCell>{u.name}{user.id == u.id ? " (deg)" : ""}</TableCell>
                              <TableCell>
                                <TextField
                                  id="to-pay"
                                  type="number"
                                  value={(this.props.amount / group.users.length).toFixed(2)}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  margin="normal"
                                />
                                <FormControl style={{ marginLeft: "1rem" }}>
                                  <InputLabel htmlFor="share-type"></InputLabel>
                                  <Select
                                    value={0}
                                    onChange={() => {}}
                                    inputProps={{
                                      name: 'share-type',
                                      id: 'share-type',
                                    }}
                                  >
                                    <MenuItem value={0}>NOK</MenuItem>
                                    <MenuItem value={1}>%</MenuItem>
                                  </Select>
                                </FormControl>
                              </TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                    <br />
                    <Button color="primary" onClick={this.submitGroupTransaction} variant="flat">Opprett gruppebetaling</Button>
                  </>
                )
              }
            </groupCtx.Consumer>
          )
        }
      </userCtx.Consumer>
    );
  }
}
