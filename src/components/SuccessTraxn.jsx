import { Info } from "@mui/icons-material";
import React, { createContext, useMemo } from "react";
import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import Table from '../containers/table/Table';
import data from '../mocks/data.json';

export const TranxRowContext = createContext();

const SuccessTraxn = () => {
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
    <div className="successtraxn-container body-container">
      <h3 className="successTraxn"> Your transaction is successful! </h3>
      <p>
        <Info /> Please copy below transaction id for future reference!
      </p>
      <TranxRowContext.Provider value={{row: getMapValue, col: Object.keys(data.transactions)}}>
          <Table />
      </TranxRowContext.Provider>
      <div className="btn">
            <NavLink className="link_btn" to="/"> Go to Home </NavLink>
      </div>
    </div>
  );
};

export default SuccessTraxn;
