import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import FailTransaction from "./FailTraxn";
// import SuccessTransaction from "./SuccessTraxn";
import { useSearchParams } from "react-router-dom";

const Response = () => {
  const [searchParams] = useSearchParams();
  const [tranxResponse, setTranxResponse] = useState(null);
  const id = searchParams.get("id");
  const getResponse = async () => {
    const resp = await fetch(`https://shree-travels-backend.onrender.com/status/${id}`)
    // const resp = await fetch(`http://localhost:8000/status/${id}`);
    const jsonRes = await resp.json();
    console.log(jsonRes);
    return jsonRes;
  };
  useEffect(() => {
      const date = new Date();
      const tranxDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
      getResponse().then(d => {
        setTranxResponse({...d.result, date: tranxDate});
      });
    // eslint-disable-next-line
  }, []);

  if (tranxResponse !== null && tranxResponse.success)
    return <Navigate to="/success" state={tranxResponse} replace />;
  
  if (tranxResponse !== null && !tranxResponse.success)
    return <Navigate to="/failure" state={tranxResponse} replace />;
  

  // return (
  //   <>
  //     {/* {tranxResponse!== null && tranxResponse.success ? 
  //     <SuccessTransaction successData={tranxResponse}/>
  //     :
  //     <FailTransaction failData={tranxResponse}/>
  //     } */}
  //     {/* <button type="button">
  //       <NavLink to="/"> Go to Home </NavLink>
  //     </button> */}
  //   </>
  // );
};

export default Response;
