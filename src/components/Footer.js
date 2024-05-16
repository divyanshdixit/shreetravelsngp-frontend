import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        {/* <Grid item xs={3}>
      <div class="flexBasis company">
          <h3>Company</h3>
          <div className="footer-list company-list">
            <p>Blog</p>
            <p>Events</p>
            <p>Press Careers</p>
            <p>Help Center</p>
            <p>Contact Us</p>
          </div>
        </div>
      </Grid> */}
        {/* <Grid item xs={3}>
      <div class="flexBasis company">
          <h3>SOLUTIONS</h3>
          <div className="footer-list SOLUTIONS-list">
            <p>MoveInSync</p>
            <p>IonMoveInSync</p>
            <p>Transport as a Service</p>
            <p> Fleet Management</p>
            <p>Work place</p>
          </div>
        </div>
      </Grid> */}
        {/* <Grid item xs={3}>
      <div className="OFFERINGS-sec">
          <h3>OFFERINGS</h3>
          <div class="footer-list SOLUTIONS-list">
            <p>Home to Office Cabs</p>
            <p> Fixed Route Shuttlec</p>
            <p> Business Travel </p>
            <p> Parking Management </p>
            <p>Work place</p>
          </div>
        </div>
      </Grid> */}
        {/* <Grid item xs={3}>
      
      <h3>Download</h3>
      <img src={gPlay} alt="gplay" className='g-play' /> 
      <img src={store} alt="store"  className='stor'/>
      </Grid> */}
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs={6}>
          <h4>@ 2024 Copyright. All rights reserved.</h4>
        </Grid>
        <Grid item xs={6} className="footer_privacy">
          <Link to="/privacy"> Privacy Policy </Link>|{" "}
          <Link to="/terms">Terms & Conditions </Link> | 
          <Link to="/cancellation"> Cancellation & Refund  </Link> 
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
