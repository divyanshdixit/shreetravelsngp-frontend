import { Info } from "@mui/icons-material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SuccessTraxn = () => {
  const location = useLocation();
  const state = location.state;
  const {message, date, data: {transactionId, merchantTransactionId, amount, responseCode, paymentInstrument
: {type}}} = state;
  return (
    <div>
      <h3> {message} </h3>
      <p>
        <Info /> Please copy below transaction id for future reference!{" "}
      </p>
      <ul className="success-txn txn">
        <li> Transaction Id: {transactionId}</li>
        <li> Merchant Transaction Id: {merchantTransactionId}</li>
        <li> Transaction Date: {date}</li>
        <li> Mode: {type}</li>
        <li> Status: {responseCode}</li>
        <li> Amount: {`${amount/100} INR`}</li>
      </ul>
      <button type="button">
        <NavLink to="/"> Go to Home </NavLink>
      </button>
    </div>
  );
};

export default SuccessTraxn;
