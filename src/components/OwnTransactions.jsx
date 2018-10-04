import { Transaction } from "./Transaction.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export const OwnTransactions = () => (
  <div>
    <Transaction type="manual">
      <OwnTransactionSubMenu />
    </Transaction>

    <br/>

    <Transaction type="own">
      <OwnTransactionSubMenu />
    </Transaction>
  </div>
);

