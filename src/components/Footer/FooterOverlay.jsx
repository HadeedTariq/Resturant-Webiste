import React from 'react';
import { images } from '../../constants';
import { BsInstagram,BsTwitter,BsFacebook } from 'react-icons/bs';
import './FooterOverlay.css';

const FooterOverlay = () => (
    <>
       <div className="footer-overlay">
        <img className='center logo' src={images.gericht} alt="" />
        <p className='center'>The best way to find yourself is to lose yourself in the service of other</p>
        <img className='center' src={images.spoon} alt="" />
        <div className="footer-logos">
            <BsFacebook className='media-logo'/>
            <BsInstagram className='media-logo'/>
            <BsTwitter className='media-logo'/>
        </div>
       </div>
    </>
);

export default FooterOverlay;
