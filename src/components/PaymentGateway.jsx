import React, { useState, useEffect, useMemo } from "react";
import { PaymentInitModal } from "pg-test-project";
// import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from "react-router-dom";
import uniqid from "uniqid";

function PaymentGateway({
  clientCode,
  transUserName,
  transUserPassword,
  authkey,
  authiv,
  payerName,
  payerEmail,
  payerMobile,
  // clientTxnId,
  amount,
  payerAddress,
  isOpen,
}) {
  const [isOpend, setIsOpend] = useState(false);
    // const [clientTxnId, setclientTxnId] = useState(clientTxnId);

  useEffect(() => {
    setIsOpend(isOpen);
  }, [isOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const responseObj = useMemo(() => {
    const resArr = location.search && location.search.slice(1).replace(/%20/g, " ").split("&");
    const resobj = {};
    resArr && resArr.forEach((item) => {
        resobj[item.split("=")[0]] = item.split("=")[1];
    });
    return resobj;
  }, [location.search]);

  useEffect(() => {
    if (responseObj && Object.keys(responseObj).length) {
      navigate("/response", {
        state: {
          data: responseObj,
        },
      });
    }
  }, [responseObj, navigate]);

  return (
    <div>
      {
        <PaymentInitModal
          clientCode={clientCode}
          transUserPassword={transUserPassword}
          transUserName={transUserName}
          isOpen={isOpend}
          clientTxnId={uniqid()}
          authkey={authkey}
          authiv={authiv}
          payerName={payerName}
          payerEmail={payerEmail}
          payerMobile={payerMobile}
          payerAddress={payerAddress}
          amount={amount}
          amountType={null}
          onToggle={() => setIsOpend(!isOpen)}
          channelId={null}
          programId={null}
          mcc={null}
          label={"Production"}
          env={process.env.REACT_APP_STAGE_ENV}
        />
      }
    </div>
  );
}

export default PaymentGateway;
