import "./App.css";
import logo from "./images/header.png";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import globe from "./images/globe.jpg";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Wallppr from "./components/Wallppr";
import Gif from "./images/GIF.gif";
import Marquee from "react-fast-marquee";
import amazon from "./images/amazon.png";
import hcl from "./images/hcl.png";
import dell from "./images/dell.png";
import mic from "./images/mic.png";
import linkin from "./images/linkin.png";
import infosys from "./images/infosys.png";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/example/exampleSlice";

function App() {
  const count = useSelector((state) => state.example.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="navdiv">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Join us - {count}</a>
            </li>
            <Button
              variant="contained"
              size="medium"
              style={{
                borderRadius: "20px",
                backgroundColor: "#0eb53b",
                marginLeft: "30px",
              }}
              onClick={() => dispatch(increment())}
            >
              Request a Demo
            </Button>
          </ul>
        </div>
      </nav>
      <Wallppr />
      <div className="driving-sec">
        <Grid container>
          <Grid item xs={12} lg={6} spacing={1} className="drive-txt">
            <h1>Driving innovation.</h1>
            <h3>
              Revolutionizing
              <br />
              office commute.
            </h3>
            <p>
              At MoveInSync, we understand the unique difficulties faced by each
              company in managing employee commutes. This motivates us to offer
              customized solutions tailored to your specific needs.
            </p>
            <p>
              At MoveInSync, we understand the unique difficulties faced by each
              company in managing employee commutes. This motivates us to offer
              customized solutions tailored to your specific needs.
            </p>
            <p>
              Whether you have a small team or a large workforce, we have the
              expertise to upgrade your employee transportation. Take a demo now
              to find out what helps us provide safe commuting options that
              effortlessly balance comfort and affordability.
            </p>
          </Grid>
          <Grid lg={6}>
            <h1></h1>
            <img src={Gif} alt="gif-annimation" className="gif-img" />
          </Grid>
        </Grid>
      </div>
      <div className="divBtn">
        <Button
          variant="contained"
          size="large"
          style={{
            borderRadius: "20px",
            marginLeft: "250px",
            backgroundColor: "#0eb53b",
          }}
          onClick={() => dispatch(decrement())}
        >
          Request a Demo
        </Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr width="50%" color="green" />
      {/* globe-wallpaper section */}
      <div
        className="globe-wall"
        style={{
          backgroundImage: `url(${globe})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p>
          Our innovative solutions drive success for
          <br /> top companies around the globe
        </p>
        <Marquee direction="left" width="20%">
          <img src={amazon} alt="amazon" />
          <img src={hcl} alt="hcl" />
          <img src={dell} alt="del" />
          <img src={infosys} alt="infosys" />
          <img src={linkin} alt="linkin" />
          <img src={mic} alt="mic" />
        </Marquee>
      </div>
      <div className="Redefining_sec">
        <h3 className="headRefi-1">Redefining</h3>
        <h2 className="headRefi-2">office commute</h2>
        <br />
        <div className="Redi-para">
          <p className="Redefi">
            With years of experience, we have redefined employee transportation
            in multiple major cities across
          </p>
          <p>
            the world. Our end-to-end outsourcing service as well as our
            technology solutions are built{" "}
          </p>

          <p>
            {" "}
            to support organizations as they enhance their employee commute
            processes.
          </p>
        </div>
      </div>
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
