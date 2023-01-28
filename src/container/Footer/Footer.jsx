import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
    <>
      <div id="footer">
        <div className="footer-content">
          <div className="contact">
            <h1 style={{textAlign:"center"}}>Contact Us</h1>
            <p>9 W 53rd St, New York, Ny 10019, Pakistan</p>
            <p>+1 212-244-1230</p>
            <p>+1 212-555-1230</p>
          </div>
          <FooterOverlay/>
          <div className="contact">
          <h1 style={{textAlign:"center",fontSize:"30px"}}>Working Hours</h1>
            <p>Monday-Friday</p>
            <p>8:00am - 12:00am</p>
            <p>Saturday-Sunday</p>
            <p>7:00am - 11:00pm</p>
          </div>
        </div>
        <h3 className='right'>2023 Gerchit. All Right Reserved</h3>
      </div>
    </>
);

export default Footer;
