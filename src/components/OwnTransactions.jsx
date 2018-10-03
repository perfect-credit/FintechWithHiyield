import { Transaction } from "./Transaction.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export const OwnTransactions = () => (
  <Transaction type="own">
    <OwnTransactionSubMenu />
  </Transaction>
);
  
