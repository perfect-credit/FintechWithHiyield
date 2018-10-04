import { 
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@material-ui/core";

export const GroupTransactionSubMenu = ({ transaction, group }) => (
  <Table className="users-table">
    <TableHead>
      <TableRow>
        <TableCell>Navn</TableCell>
        <TableCell numeric>Skylder</TableCell>
        <TableCell>Betalt?</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        transaction.userPaymentDues.map((pd) => (
          <TableRow key={pd.userId}>
            <TableCell>{group.users.find((u) => u.id == pd.userId).name}{}</TableCell>
            <TableCell numeric>{pd.amount.toFixed(2)}kr</TableCell>
            <TableCell padding="checkbox">
              <Checkbox
                disabled
                checked={pd.hasPayed}
              />
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);
