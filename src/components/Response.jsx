import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import FailTransaction from "./FailTraxn";
import SuccessTransaction from "./SuccessTraxn";
import { useSearchParams } from "react-router-dom";

const Response = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const getResponse = async() => {
    const resp = await fetch(`https://shree-travels-backend.onrender.com/status?id=${id}`)
    const result = await resp.json();
    console.log(result);
  }
  useEffect(() => {
     getResponse();
     // eslint-disable-next-line
  }, [])
  // const location = useLocation();

  // if (!location.state)
  //   return <Navigate to="/payment" state={{ from: location }} replace />;
  // else {
  //   const { statusCode } = location.state.data;

    return (
      <>
        {/* {statusCode === "0300" ?  */}
          <FailTransaction />
         {/* :  */}
          <SuccessTransaction />
        {/* } */}
        <button type="button">
          <NavLink to="/"> Go to Home </NavLink>
        </button>
      </>
    );
  }

export default Response;
