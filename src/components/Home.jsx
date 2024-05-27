import React from "react";
import Wallppr from "./Wallppr";
import Grid from "@mui/material/Grid";
import Gif from "../images/GIF.gif";
import Title from "../containers/Title";
import data from "../mocks/data.json";
import Heading from "../containers/Heading";
import Image from "../containers/Image";
import Button from "../containers/Button";
// import Marquee from "react-fast-marquee";
// import amazon from "../images/amazon.png";
// import hcl from "../images/hcl.png";
// import dell from "../images/dell.png";
// import mic from "../images/mic.png";
// import linkedin from "../images/linkin.png";
// import infosys from "../images/infosys.png";
import globe from "../images/globe.webp";
import img_exprience from "../images/wall-dark.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getUser = async() => {
  //     const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/'}register`);
  //     const result = await response.json();
  //   }
  //   getUser();
  // }, [])
  // const getImageArr = useMemo(() => {
  //   return [amazon, hcl, dell, infosys, linkedin, mic];
  // }, []);

  // const getImageAlts = useMemo(() => {
  //   return ["amazon", "hcl", "dell", "infosys", "linkedin", "mic"];
  // }, []);

  return (
    <>
      <Wallppr />
      {/* Driving inno section */}
      <div className="driving-sec body-container">
        <Grid container>
          <Grid item xs={12} lg={6} spacing={1} className="drive-txt">
            <Heading component="h1" content={data.driving.heading1} />
            <Heading component="h3" content={data.driving.heading3} />
            <Title title={data.driving.title1} />
            <Title title={data.driving.title2} />
            <Title title={data.driving.title3} />
          </Grid>
          <Grid lg={6}>
            <Image src={Gif} alt="gif-annimation" classNames="gif-img" />
          </Grid>
        </Grid>
      </div>

      <hr width="50%" color="green" />
      {/* globe-wallpaper section */}
      <div
        className="globe-wall body-container"
        style={{
          backgroundImage: `url(${globe})`,
        }}
      >
        <Title title={data.globe.title} />
        {/* request btn */}
        <div className="divBtn-grps">
          <Button
            text={data.button.pricing}
            onclick={() => navigate("/contact")}
            className="ex-demo-btn"
          />

          <Button
            text={data.button.payments}
            onclick={() => navigate("/payment")}
            className="ex-demo-btn"
          />
        </div>

        {/* <Marquee direction="right" width="10%" loop="25">
          <div>
            {" "}
            <p>B.H.E.L </p>{" "}
          </div>
          <div>
            <p>BPCL </p>
          </div>{" "}
          <br />
          <p>HPCL </p> <br />
          <p>Blue Star </p> <br />
          <p>Bosch Ltd </p> <br />
        </Marquee> */}
      </div>

      {/* redifining para */}
      <div className="Redefining_sec body-container">
        <Heading
          component="h3"
          content={data.redifiniing.heading3}
          className="headRefi-1"
        />
        <Heading
          component="h2"
          content={data.redifiniing.heading2}
          className="headRefi-2"
        />
        <div className="Redi-para">
          <Title title={data.redifiniing.title} className="Redefi" />
        </div>
      </div>

      {/* experience it yoursefl */}
      <div
        className="ex-demo body-container"
        style={{ backgroundImage: `url(${img_exprience})` }}
      >
        <Heading
          component="h1"
          content={data.experience.heading}
          className="demo-txt"
        />
        <Title title={data.experience.title} className="demo-txt" />
        <Button
          text={data.button.request}
          className="ex-demo-btn"
          onclick={() => navigate("/contact")}
        />
      </div>
    </>
  );
};

export default Home;
