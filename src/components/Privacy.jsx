import React from "react";

const Privacy = () => {
  return (
    <div style={{textAlign:'left'}}>
      <p>
        Shree Travels is committed to ensuring that your privacy is protected.
        Should we ask you to provide certain information by which you can be
        identified when using this website, then you can be assured that it will
        only be used in accordance with this privacy statement. Shree Travels
        may change this policy from time to time by updating this page. You
        should check this page from time to time to ensure that you are happy
        with any changes. This policy is effective from 16th of May, 2024.
      </p>
      <div><b>What we collect</b></div>
      <p> We may collect the following information: </p>
      <ol style={{ textAlign: "left", display: "list-item" }}>
        <li> Name </li>
        <li>
          {" "}
          Contact information including email address, mobile number and
          Permanent address proof{" "}
        </li>
        <li>
          {" "}
          Demographic information such as postcode, preferences and interests{" "}
        </li>
        <li> Other information relevant to customer surveys and/or offers </li>
        <li>
          {" "}
          Identity proof (for security reasons) In general, you can visit our
          website without telling us who you are or revealing any personal
          information about yourself.
        </li>
      </ol>
      <div><b>Pricing Policy</b></div>
      Shree Travels and the User consider the pricing section inside contact us section for
      booking. The pricing are subject to change in future. 
      <div><b>Security</b></div>
      We are committed to ensuring that your information is secure. In order to
      prevent unauthorised access or disclosure we have put in place suitable
      physical, electronic and managerial procedures to safeguard and secure the
      information we collect online.
      <div><b> Links to other websites </b></div>
      Our website may contain links to other websites of interest. However, once
      you have used these links to leave our site, you should note that we do
      not have any control over that other website. Therefore, we cannot be
      responsible for the protection and privacy of any information which you
      provide whilst visiting such sites and such sites are not governed by this
      privacy statement. You should exercise caution and look at the privacy
      statement applicable to the website in question.
      
      
    </div>
  );
};

export default Privacy;
