import { 
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";

import "../stylesheets/group-transaction-sub-menu.scss";

export const GroupTransactionSubMenu = () => (
  <Table className="users-table">
    <TableBody>
      <TableRow>
        <TableCell>Tore</TableCell>
        <TableCell>200,00kr</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>50,00kr</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Thomas</TableCell>
        <TableCell>50,00kr</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
