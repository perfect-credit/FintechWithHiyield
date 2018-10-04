// Later this will be gone
import { Transaction } from "./Transaction.jsx";
import { GroupTransactionSubMenu } from "./GroupTransactionSubMenu.jsx";

import "../stylesheets/group-transactions.scss";

export const GroupTransactions = () => ( 
  <div className="group-transactions">
    <Transaction type="group">
      <GroupTransactionSubMenu />
    </Transaction>
  </div>
);
