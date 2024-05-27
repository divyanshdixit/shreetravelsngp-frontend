import React from 'react'

const FailTraxn = ({state: {message, sabpaisaTxnId, transDate, paymentMode, status, paidAmount, amountType}}) => {
  return (
    <div>
        <h3> Transaction failed Error: {message}</h3>
        <ul className='fail-txn txn'>
            <li> Transaction Id: {sabpaisaTxnId}</li>
            <li> Transaction Date: {transDate}</li>
            <li> Mode: {paymentMode}</li>
            <li> Status: {status}</li>
            <li> Amount: {`${paidAmount} ${amountType}`}</li>
        </ul>
    </div>
  )
}

export default FailTraxn