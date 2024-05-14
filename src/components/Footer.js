import React from 'react' ;
import Grid from '@mui/material/Grid';
import gPlay from '../images/gPlay.png';
import store from '../images/store.png'

const Footer = () => {
  return (
    <div className='footer'>
     
      <Grid container>
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={3}>
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
      </Grid>
      <Grid item xs={3}>
      
      <h3>Download</h3>
      <img src={gPlay} alt="gplay" className='g-play' /> 
      <img src={store} alt="store"  className='stor'/>
      </Grid>
      </Grid>
      <hr/>
      <Grid container>
        <Grid item xs={6}>
           <h4>@ 2023 Copyright. All rights reserved.</h4>
        </Grid>
        <Grid item xs={6}>
           <h4>Privacy Policy|Terms of Use|End User Agreement</h4>
        </Grid>
       

      </Grid>
    </div>
  )
}

export default Footer
