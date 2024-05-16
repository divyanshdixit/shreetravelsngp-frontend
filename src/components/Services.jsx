import React from "react";
import Image from "../containers/Image";
import car1 from '../images/car1.jpeg';
import car2 from '../images/car2.jpeg';
import car3 from '../images/car3.jpeg';

const Services = () => {
  return (
    <div>
      <h1> Corporate Car Rental Services In Nagpur</h1><br/>
      <div className="car-image">
      <Image src={car1} alt="" width="" height="" />
      <Image src={car2} alt="" width="" height="" />
      <Image src={car3} alt="" width="" height="" />
      </div>
      <p>
        {" "}
        We are the best Corporate Car Rental service provider in Nagpur for last
        30 years. We offer car rental services to various industries such as IT,
        BPO, KPO and other corporate offices.
      </p><br/><br/>

      <p>
        {" "}
        Shree Travels holds the top-notch position in corporate car rental
        service in Nagpur for large and small organizations. We are one of
        the best Corporate car rental service providers in Nagpur with
        pocket-friendly, reasonable, and competitive charges. Our cars are well
        maintained and come with professionally trained chauffeur.{" "}
      </p><br/><br/>

      <p>
        Shree Travels provide a one-stop professional Corporate car rental
        service for all your travel needs. We offer best-in-class various kinds
        of packages for corporate including hourly, daily, and monthly rentals.{" "}
      </p><br/><br/>

      <p>
        We also have the liberty to choose from best-in-class well maintained
        all kinds of cars ranging from Hatchback, Sedan, and SUV’s for your
        Corporate car rentals requirements
      </p><br/><br/>
    </div>
  );
};

export default Services;
