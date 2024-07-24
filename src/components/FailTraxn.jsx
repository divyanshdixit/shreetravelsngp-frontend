import React, { useMemo } from "react";
import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import Table from '../containers/table/Table';
import data from '../mocks/data.json';
import { TranxRowContext } from "./SuccessTraxn";

const FailTraxn = () => {

  const [searchParams] = useSearchParams();
  const params = searchParams.entries();

  const getMapValue = useMemo(() => {
    const mapTranx = new Map(params);
    const d = new Date();
    const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
    mapTranx.set('traxndate', date);
    return mapTranx;
  }, [params]);

  if(!searchParams.get('redirect')){
    return <Navigate to="/payment" replace />
  }

  return (
    <div className="failtraxn-container body-container">
      {console.log(getMapValue)}
      <h3 className="failTraxn"> Your transaction is failed!</h3>
      <TranxRowContext.Provider value={{row: getMapValue, col: Object.keys(data.transactions)}}>
          <Table />
      </TranxRowContext.Provider>
      {/* <ul className="fail-txn txn">
        <li> Transaction Id: {mapTranx.get("transactionId")}</li>
        <li>
          Merchant Transaction Id: {mapTranx.get("merchantTransactionId")}
        </li>
        <li> Transaction Date: {date}</li>
        <li> Mode: {mapTranx.get("type")}</li>
        <li> Status: {mapTranx.get("responseCode")}</li>
        <li> Amount: {`${mapTranx.get("amount")} INR`}</li>
      </ul> */}
      <button type="button">
        <NavLink to="/"> Go to Home </NavLink>
      </button>
    </div>
  );
};

export default FailTraxn;
