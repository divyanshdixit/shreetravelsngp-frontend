import React from "react";
import Heading from "../containers/Heading";

const Terms = () => {
  return (
    <div className="terms-container body-container">
      <Heading component={'h1'} content={'Terms & Conditions'} />
      <ul>
        <li>The customer shall pay the car rental fare as per the applicable rates and payment schedules mentioned on the website of Shree Travels at the time of booking. The customer shall also pay parking charges, toll-charges, service tax, state tax and any other fee or levy presently payable or imposed hereinafter under applicable law/s for availing the car rental services. </li>
        <li>The payment has to be transferred to the Shree Travels account for the transaction to be completed. The client will have the responsibility to confirm the transaction with Shree Travels and send all relevant details and proof to confirm the same.</li>
        <li>The billing shall be done after the completion of the transaction and the bill shall be sent through email. The client shall pay the amount communicated on email through the payment gateway and shall send us the confirmation of the transaction separately through email to shreetravelsngp@yahoo.com.</li>
        <li>In case of a payment made before the commencement of a booking, the amount shall be treated as advance / part payment and the final amount nett of the advance paid shall be cleared by the client as per the amount intimated to the client on email.</li>
        <li>The transaction / payment has to be made within the office hours of 0930 to 1900 hrs on a monday to saturday basis excluding public holidays for the vehicle to be dispatched. alternatively, for other hours / days, the client has the option to come to our 24x7 operations office and complete the physical swiping of the credit card and make the payment and confirm the booking.</li>
        <li>The Customer agrees and acknowledges that the use of the services offered by Shree Travels is at the sole risk of the Customer. Shree Travels disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness of the services offered by Shree Travels. The liability of Shree Travels is excluded to the fullest extent permitted by law.</li>
        <li> The pricing rates are subject to revision in petroleum product in the future. </li>
      </ul>
    </div>
  );
};

export default Terms;
