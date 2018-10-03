import { 
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@material-ui/core";

export const GroupTransactionSubMenu = () => (
  <Table className="users-table">
    <TableHead>
      <TableRow>
        <TableCell>Navn</TableCell>
        <TableCell numeric>Skylder</TableCell>
        <TableCell>Betalt?</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Tore</TableCell>
        <TableCell numeric>200,00kr</TableCell>
        <TableCell padding="checkbox">
          <Checkbox
            disabled
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell numeric>50,00kr</TableCell>
        <TableCell padding="checkbox">
          <Checkbox
            disabled
            checked
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Thomas</TableCell>
        <TableCell numeric>50,00kr</TableCell>
        <TableCell padding="checkbox">
          <Checkbox
            disabled
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
