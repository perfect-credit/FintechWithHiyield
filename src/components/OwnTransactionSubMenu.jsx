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

export const OwnTransactionSubMenu = ({ amount }) => (
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
                  placeholder={group.name}
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
                              value={(amount / group.users.length).toFixed(2)}
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
                <Button variant="outlined" color="primary">Opprett gruppebetaling</Button>
              </>
            )
          }
        </groupCtx.Consumer>
      )
    }
  </userCtx.Consumer>
);
