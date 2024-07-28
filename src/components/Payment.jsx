import React, { useState } from "react";
import Button from "../containers/Button";
import axios from "axios";
import Loader from "../containers/loader/Loader";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [payerDetails, setPayerDetails] = useState({
    payerName: '',
    payerEmail: '',
    amount: '',
    remarks:'',
    amountType:'INR'
  });

  const handleInput = (e) => {
    setPayerDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {payerName, payerEmail, amount, remarks, amountType} = payerDetails;

    let data = {
      name: payerName,
      email: payerEmail,
      amount: amount * 100,
      remarks,
      currency: amountType,
      merchantUserId: "MUID" + Date.now(),
      merchantTrxnId:
        "MT" + Date.now(),
    };

    let res = await axios.post(
      "https://shree-travels-backend.onrender.com/payment",
      { ...data }
    );
    // let res = await axios.post("http://localhost:8000/payment", { ...data });
    if (res.data && res.data.result.data.instrumentResponse.redirectInfo.url) {
      window.location.href =
        res.data.result.data.instrumentResponse.redirectInfo.url;
    }
  };

  return (
    <>
      {/* <Heading component="h1" content="Coming Soon..." className="payment" /> */}
      <div className="body-container container-fluid bg-secondary text-white py-4">
        <form className="payment-form" onSubmit={handleSubmit}>
            <div className="payment-row mt-3">
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="payerName"
                  value={payerDetails.payerName}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="payerEmail"
                  placeholder="Email"
                  value={payerDetails.payerEmail}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            <div className="payment-row mt-3">
              {/* <div className="col-input">
                <label htmlFor="" className="input-label">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone :"
                  value={payerMobile}
                  onChange={(e) => setPayerMobile(e.target.value)}
                  required
                  min={10}
                  max={10}
                />
              </div> */}
              <div className="col-input col-span">
                <label htmlFor="" className="input-label">
                  Amount:
                </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  value={payerDetails.amount}
                  onChange={handleInput}
                  required
                />
                <span className="amount-type">{payerDetails.amountType}</span>
              </div>
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Remarks:
                </label>
                <input
                  type="text"
                  name="remarks"
                  placeholder="Remarks if any"
                  value={payerDetails.remarks}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="payment-btn text-center">
              <div>
                {loading ? (
                  <Loader />
                ) : (
                  <Button
                    type="submit"
                    disabled={loading}
                    text={"Proceed for payment"}
                    className="ex-demo-btn"
                  />
                )}
              </div>
            </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Payment;
