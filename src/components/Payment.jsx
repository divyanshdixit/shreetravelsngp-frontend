import React, { useState } from 'react'
import PaymentGateway from './PaymentGateway';

// require('dotenv').config();

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientCode, setClientCode] = useState(process.env.REACT_APP_PAISA_CLIENT_CODE);
  const [transUserName, setTransUserName] = useState(process.env.REACT_APP_PAISA_USER_NAME);
  const [transUserPassword, setTransUserPassword] = useState(process.env.REACT_APP_PAISA_PASSWORD);
  const [authkey, setAuthkey] = useState(process.env.REACT_APP_PAISA_AUTH_KEY);
  const [authiv, setAuthiv] = useState(process.env.REACT_APP_PAISA_AUTH_IV);
  const [payerName, setPayerName] = useState('');
  const [payerEmail, setPayerEmail] = useState("");
  const [payerMobile, setPayerMobile] = useState("");
  // const [clientTxnId, setclientTxnId] = useState(null);
  const [amount, setAmount] = useState(null);
  const [payerAddress, setPayerAddress] = useState("");
  const [callbackUrl, setCallbackUrl] = useState(`http://localhost:3000/response`);
  const [data, setData] = useState(null);
  const [amountType, setamountType] = useState(null);
  // const [details, setDetails] = useState({
  //   payerName: ''
  // });
  // const [selectedOption, setSelectedOption] = useState('');

  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setDetails({
  //     [name]: [value]
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    // const btn = document.getElementById('renderSabPaisa');
    // btn.click();
  }
  return (
    <>
      {/* <Heading component="h1" content="Coming Soon..." className="payment" /> */}
      <div className="container-fluid bg-secondary text-white py-4">
      <form className='xyz' onSubmit={handleSubmit} >
        <div className="wrapper">

          {/* <div className="row py-2">
            <div className="col-md-12 d-flex justify-content-center">
              <h2 className='text-white bg-success px-2 py-1 rounded'>SabPaisa Payment Gateway</h2>
            </div>
          </div> */}

          <div id='renderSabPaisa'></div>
          <div className="row mt-3">
            <div className="form-group"></div>

            <div className="col-md-3 mb-3">
              {/* <label htmlFor=""> Client Code : </label> <br /> */}
              <input type="hidden" placeholder='Client Code :' value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
              {/* <label htmlFor="" > Trnx User Name : </label> <br /> */}
              <input type="hidden" placeholder='Trnx User Name :' value={transUserName} onChange={(e) => setTransUserName(e.target.value)} />
            </div>

            <div className="col-md-3 mb-3">
              {/* <label htmlFor="" > Trnx User Password : </label> <br /> */}
              <input type="hidden" placeholder='Trnx User Password :' value={transUserPassword} onChange={(e) => setTransUserPassword(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              {/* <label htmlFor="" > Auth Key : </label> <br /> */}
              <input type="hidden" placeholder='Auth Key :' value={authkey} onChange={(e) => setAuthkey(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              {/* <label htmlFor="" > Auth IV : </label> <br /> */}
              <input type="hidden" placeholder='Auth IV :' value={authiv} onChange={(e) => setAuthiv(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Name : </label> <br />
              <input type="text" placeholder='Name :' name="payerName" value={payerName} onChange={(e) => setPayerName(e.target.value)} required />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Email : </label> <br />
              <input type="email" placeholder='Email :' value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} required/>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Phone : </label> <br />
              <input type="tel" placeholder='Phone :' value={payerMobile} onChange={(e) => setPayerMobile(e.target.value)} required min={10} max={10}/>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Amount : </label> <br />
              <input type="number" placeholder='Amount :' value={amount} onChange={(e) => setAmount(e.target.value)}  required/>
            </div>
            {/* <div className="col-md-3 mb-3">
              <label htmlFor=""> Client Trnx Id : </label> <br />
              <input type="hidden" placeholder='Client Trnx Id :' value={clientTxnId} onChange={(e) => setclientTxnId(e.target.value)} />
            </div> */}
            <div className="col-md-3 mb-3">
              <label htmlFor=""> Address : </label> <br />
              <input type="text" placeholder='Address :' value={payerAddress} onChange={(e) => setPayerAddress(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              {/* <label htmlFor="" > Callback Url : </label> <br /> */}
              <input type="hidden" placeholder='Callback Url :' value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Remarks : </label> <br />
              <input type="text" placeholder='Remarks if any :' value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            {/* <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf1 : </label> <br />
              <input type="text" placeholder='Udf 1 :' value={udf1} onChange={(e) => setudf1(e.target.value)} />
            </div> */}
            {/* <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf 2 : </label> <br />
              <input type="text" placeholder='Udf 2 :' value={udf2} onChange={(e) => setudf2(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Udf 3 : </label> <br />
              <input type="text" placeholder='Udf 3 :' value={udf3} onChange={(e) => setudf3(e.target.value)} />
            </div> */}
            {/* <div className="col-md-3 mb-3">
              <label htmlFor="" > Channel ID : </label> <br />
              <input type="hidden" placeholder='Channel Id :' value={channelId} onChange={(e) => setchannelId(e.target.value)} />
            </div> */}
            {/* <div className="col-md-3 mb-3">
              <label htmlFor="" > Program ID : </label> <br />
              <input type="text" placeholder='Program Id :' value={programId} onChange={(e) => setprogramId(e.target.value)} />
            </div> */}
            {/* <div className="col-md-3 mb-3">
              <label htmlFor="" > MCC : </label> <br />
              <input type="text" placeholder='MCC :' value={mcc} onChange={(e) => setmcc(e.target.value)} />
            </div> */}
            <div className="col-md-3 mb-3">
              <label htmlFor="" > Account Type : </label> <br />
              <input type="text" placeholder='Account Type :' value={amountType} onChange={(e) => setamountType(e.target.value)} disabled/>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div>
              <button type="submit" value="Submit" className="xyz btn btn-success mb-5">Proceed for payment</button>
            </div>
          </div>
        </div>
      <PaymentGateway amountType={amountType} clientCode={clientCode} transUserName={transUserName} transUserPassword={transUserPassword} authkey={authkey} authiv={authiv} payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile} amount={amount} payerAddress={payerAddress} callbackUrl={callbackUrl} isOpen={isOpen} />
      </form>

    </div>
    </>
  )
}

export default Payment;



  
  
  // const [udf2, setudf2] = useState(null);
  // const [udf3, setudf3] = useState(null);
  // const [udf4, setudf4] = useState(null);
  // const [udf5, setudf5] = useState(null);
  // const [udf6, setudf6] = useState(null);
  // const [udf7, setudf7] = useState(null);
  // const [udf8, setudf8] = useState(null);
  // const [udf9, setudf9] = useState(null);
  // const [udf10, setudf10] = useState(null);
  // const [udf11, setudf11] = useState(null);
  // const [udf12, setudf12] = useState(null); // client id
  // const [udf13, setudf13] = useState(null); // plan id
  // const [udf14, setudf14] = useState(null); // plan name
  // const [udf15, setudf15] = useState(null); // application id (product id)
  // const [udf16, setudf16] = useState(null); // client subscribe plan detail id(refer to DB)
  // const [udf17, setudf17] = useState(null); // payment from the COB portal
  // const [udf18, setudf18] = useState(null);
  // const [udf19, setudf19] = useState(null);
  // const [udf20, setudf20] = useState(null);
  