import { 
  Button,
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@material-ui/core";

export const OwnTransactionSubMenu = () => (
  <>
    <Table className="users-table">
      <TableHead>
        <TableRow>
          <TableCell>Navn</TableCell>
          <TableCell>Å betale</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Tore</TableCell>
          <TableCell>
            <TextField
              id="to-pay"
              type="number"
              value="0"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>
            <TextField
              id="to-pay"
              type="number"
              value="0"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thomas</TableCell>
          <TableCell>
            <TextField
              id="to-pay"
              type="number"
              value="0"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <br />
    <Button variant="outlined" color="primary">Opprett gruppebetaling</Button>
  </>
);
