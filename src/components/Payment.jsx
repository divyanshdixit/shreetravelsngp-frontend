import React, { useState } from "react";
import Button from "../containers/Button";
import axios from "axios";
import Loader from "../containers/loader/Loader";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [payerName, setPayerName] = useState("");
  const [payerEmail, setPayerEmail] = useState("");
  const [payerMobile, setPayerMobile] = useState("");
  const [amount, setAmount] = useState(0);
  const [payerAddress, setPayerAddress] = useState("");
  const [data, setData] = useState(null);
  const [amountType, setamountType] = useState("INR");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      name: payerName,
      email: payerEmail,
      address: payerAddress,
      amount: amount * 100,
      mobile: payerMobile,
      merchantUserId: "MUID" + payerMobile.toString().substring(7) + Date.now(),
      merchantTrxnId:
        "MT" + payerMobile.toString().substring(4, 8) + Date.now(),
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
        <form className="xyz" onSubmit={handleSubmit}>
          <div className="wrapper">
            {/* <div className="row py-2">
            <div className="col-md-12 d-flex justify-content-center">
              <h2 className='text-white bg-success px-2 py-1 rounded'>SabPaisa Payment Gateway</h2>
            </div>
          </div> */}

            <div className="row mt-3">
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="payerName"
                  value={payerName}
                  onChange={(e) => setPayerName(e.target.value)}
                  required
                />
              </div>
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email :"
                  value={payerEmail}
                  onChange={(e) => setPayerEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-input">
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
              </div>
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Amount :"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address :"
                  value={payerAddress}
                  onChange={(e) => setPayerAddress(e.target.value)}
                />
              </div>

              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Remarks
                </label>
                <textarea
                  value={data}
                  placeholder="Remarks if any"
                  onChange={(e) => setData(e.target.value)}
                ></textarea>
              </div>
              <div className="col-input">
                <label htmlFor="" className="input-label">
                  Account Type
                </label>
                <input
                  type="text"
                  placeholder="Account Type :"
                  value={amountType}
                  onChange={(e) => setamountType(e.target.value)}
                  disabled
                />
              </div>
            </div>
            <div className="row mt-5 text-center">
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
