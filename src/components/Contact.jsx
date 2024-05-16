import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  Button,
  FormHelperText,
  Alert,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import pricing from '../images/pricing.webp';
import Image from "../containers/Image";
import Heading from "../containers/Heading";

const Contact = () => {
  const [contact, setContact ] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });
  const [error] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, number, query} = contact;
    setShow(true);

    // const formData = new FormData(e.currentTarget);
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const number = formData.get("number");
    // const query = formData.get("query");
    console.log(name, email, number, query);
    setTimeout(() => {
      setShow(false);
      setContact({
        name: "",
    email: "",
    number: "",
    query: "",
      })
    }, 1500)
  };

  const handleChange = (e) => {
    setContact((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    });

  }

  return (
    <>
    <div className="contact-container body-container">
      <Box component="form" className="contact-form">
        <Heading component={'h3'} content={'Send your queries'} />
        <FormControl>
          {/* <InputLabel htmlFor="name">Name</InputLabel> */}
          <TextField
            error={error}
            id="name"
            name="name"
            label="Name"
            variant="standard"
            value={contact.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          {/* <InputLabel htmlFor="email">Email address</InputLabel> */}
          <TextField
            error={error}
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={contact.email}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          {/* <InputLabel htmlFor="contact">Contact Number</InputLabel> */}
          <TextField
            error={error}
            id="contact"
            name="number"
            label="Contact Number"
            variant="standard"
            value={contact.number}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          {/* <InputLabel htmlFor="query">Your Query</InputLabel> */}
          <TextField
            id="query"
            name="query"
            value={contact.query}
            label="Your query"
            multiline
            rows={4}
            onChange={handleChange}
          />
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit} className="submit-btn">
          Submit
        </Button>
        {
          show &&  
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Thank you for submitting query. We'll get back to you shortly.
        </Alert>
        }
      </Box>
      <div className="address-price-container">

        <div className="address-container">
          <div className="contact-details">
            <Heading component={'h3'} content={'Contact Details'} />
            <div className="contact-address">
            <p>
                <b>Address:</b> Plot No. 1066, Near Law College Square, Gorepeth, Nagpur- 440010
            </p>
            <p>
                <b>Tele:</b> 2536801 
            </p>
            <p>
                <b>Mobile:</b> 9822236802 
            </p>
            <p>
                <b>Email:</b> shreetravelsngp@yahoo.com
            </p>
            </div>
          </div>
          <div className="open_hrs">
            <Heading component={'h3'} content={'Opening Hours'} />
            <p> <b>Mon to Sat:</b> <span> 10:00 AM to 10:00 PM</span></p>
          </div>
        </div>

        <div className="pricing-img">
          <Heading component="h3" content="Pricing" />
          <Image src={pricing} alt="pricing" width="500px" height="500px" classNames="pricing" />
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Contact;
