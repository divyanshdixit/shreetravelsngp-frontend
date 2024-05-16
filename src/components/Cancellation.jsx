import React from 'react'
import Heading from '../containers/Heading'

const Cancellation = () => {
  return (
    <div className='cancel-container body-container'>
      <Heading component={'h1'} content={'Cancellation & Return'} />
      <ul>
        <li>The customer agrees and acknowledges that refund shall be processed if the cancellation request is received before 24 hour of scheduled pickup. (Refer point 3 for special cases) </li>
        <li>The Cancellation can be done over the phone or by email. All cancellation to be made against the booking ID provided at the time of booking the cab.</li>
        <li> No cancellations are entertained in any case for those products/Service that Shree travels marketing team has obtained on special occasions like Dussehra, Pongal, Diwali, New year etc. These are limited occasion offers and therefore cancellations are not possible.</li>
        <li>Shree travels will not be responsible for any cancellation/delay of service in case of any natural calamity, agitation, Strike or Road Jam/traffic etc. Hence no refund would be made.</li>
        <li>The customer agrees and acknowledges that no refund shall be processed if the cancellation request is received within 24 hours of scheduled pickup.</li>
        <li>Shree travels might change driver & cab details prior to boarding the taxi in case of vehicle breakdown or other genuine reasons at Driver’s end. No Cancellation request shall be entertained in such cases.</li>
        <li>Shree travels reserves the right to cancel/change the booking of vehicle at any point of time. </li>
      </ul>
      <div>
        <Heading component={'h1'} content={'Refund Policy'} />
        <p> If you are eligible for refunds based on the <b>"Cancellation and Returns"</b> policy above, then the refund will be remitted back to you in 5-7 working days. In case of any issues, write to us at <b>shreetravelsngp@yahoo.com</b> or call us at <b> +91 9822236802. </b></p>
      </div>
    </div>
  )
}

export default Cancellation