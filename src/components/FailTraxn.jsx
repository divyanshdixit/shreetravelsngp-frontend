import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const FailTraxn = ()=> {
  const location = useLocation();
  const state = location.state;
  const {message, date, data: {transactionId, merchantTransactionId, amount, responseCode, paymentInstrument
: {type}}} = state;
  return (
    <div>
        <h3> {message}</h3>
        <ul className='fail-txn txn'>
            <li> Transaction Id: {transactionId}</li>
            <li> Transaction Id: {merchantTransactionId}</li>
            <li> Transaction Date: {date}</li>
            <li> Mode: {type}</li>
            <li> Status: {responseCode}</li>
            <li> Amount: {`${amount/100} INR`}</li>
        </ul>
        <button type="button">
          <NavLink to="/"> Go to Home </NavLink>
        </button>
    </div>
  )
}

export default FailTraxn