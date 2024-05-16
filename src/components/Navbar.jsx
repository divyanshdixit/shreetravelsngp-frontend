import React from "react";
import logo from "../images/shree.webp";
import { Link, useNavigate } from "react-router-dom";
import Button from '../containers/Button';
import data from '../mocks/data.json';
import Image from "../containers/Image";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
        <Link to='/'><Image src={logo} alt="logo" className="logo" /> </Link>

      <div className="navdiv">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        <Button text={data.button.request} onclick={() =>  navigate('/contact')}/>

          {/* <Button
            variant="contained"
            size="medium"
            style={{
              borderRadius: "20px",
              backgroundColor: "#0eb53b",
              marginLeft: "30px",
            }}
            onClick={() => navigate("/contact")}
          >
            Request a Demo
          </Button> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
