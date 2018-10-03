import { Transaction } from "./Transaction.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export const OwnTransactions = () => (
  <>
    <Transaction type="manual">
      <OwnTransactionSubMenu />
    </Transaction>

    <br/>
    

    <Transaction type="own">
      <OwnTransactionSubMenu />
    </Transaction>
  </>
);
  
