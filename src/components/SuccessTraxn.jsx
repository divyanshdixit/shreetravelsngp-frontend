import { Info } from "@mui/icons-material";
import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const SuccessTraxn = () => {
  
  const [searchParams] = useSearchParams();
  const params = searchParams.entries();
  const mapTranx = new Map(params);
  const d = new Date();
  const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
  
  return (
    <div>
      <h3> Your transaction is successful! </h3>
      <p>
        <Info /> Please copy below transaction id for future reference!{" "}
      </p>
      <ul className="success-txn txn">
        <li> Transaction Id: {mapTranx.get('transactionId')}</li>
        <li> Merchant Transaction Id: {mapTranx.get('merchantTransactionId')}</li>
        <li> Transaction Date: {date}</li>
        <li> Mode: {mapTranx.get('type')}</li>
        <li> Status: {mapTranx.get('responseCode')}</li>
        <li> Amount: {`${mapTranx.get('amount')} INR`}</li>
      </ul>
      <button type="button">
        <NavLink to="/"> Go to Home </NavLink>
      </button>
    </div>
  );
};

export default SuccessTraxn;
