import React from 'react';
import "./Findus.css"
import { images } from '../../constants';
const FindUs = () => (
  <>
    <div id="find-us">
      <div className="find-us-content">
        <div className="find-us-text">
          <h3>Contact</h3>
          <img src={images.spoon} alt="" />
          <h1>Find Us</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          <p>Opening Hours</p>
          <h5>Mon-Fri 10:00 am to 2:00 am</h5>
          <h5>Sat-Sun 10:00 am to 3:00 am</h5>
          <button>View More</button>
        </div>
        <div className="find-us-img">
          <img src={images.findus} alt="" />
        </div>
      </div>
    </div>
  </>
);

export default FindUs;
