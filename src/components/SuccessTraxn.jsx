import { Info } from "@mui/icons-material";
import React from "react";

const SuccessTraxn = ({
  state: { sabpaisaTxnId, transDate, paymentMode, status, paidAmount, amountType },
}) => {
  return (
    <div>
      <h3> Your transaction is successfull! </h3>
      <p>
        <Info /> Please copy below transaction id for future reference!{" "}
      </p>
      <ul className="success-txn txn">
        <li> Transaction Id: {sabpaisaTxnId}</li>
        <li> Transaction Date: {transDate}</li>
        <li> Mode: {paymentMode}</li>
        <li> Status: {status}</li>
        <li> Amount: {`${paidAmount} ${amountType}`}</li>
      </ul>
    </div>
  );
};

export default SuccessTraxn;
