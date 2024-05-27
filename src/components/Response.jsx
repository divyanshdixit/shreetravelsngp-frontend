import React from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import FailTransaction from "./FailTraxn";
import SuccessTransaction from "./SuccessTraxn";

const Response = () => {
  const location = useLocation();

  if (!location.state)
    return <Navigate to="/payment" state={{ from: location }} replace />;
  else {
    const { statusCode } = location.state.data;

    return (
      <>
        {statusCode === "0300" ? 
          <FailTransaction state={location.state.data} />
         : 
          <SuccessTransaction state={location.state.data} />
        }
        <button type="button">
          <NavLink to="/"> Go to Home </NavLink>
        </button>
      </>
    );
  }
};

export default Response;
