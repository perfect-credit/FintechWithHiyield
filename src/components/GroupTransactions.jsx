// Later this will be gone
import { Transaction } from "./Transaction.jsx";
import { GroupTransactionSubMenu } from "./GroupTransactionSubMenu.jsx";
import { OwnTransactionSubMenu } from "./OwnTransactionSubMenu.jsx";

export const GroupTransactions = () => ( 
    <>
      <Transaction type="manual">
        <OwnTransactionSubMenu />
      </Transaction>

      <br/>

      <Transaction type="group">
        <GroupTransactionSubMenu />
      </Transaction>
    </>
);
