import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import Content from './Content'
const AboutUs = () => {
  return(
    <>
     <div id="about">
      <div className="g-letter">
        <img id='g-image' src={images.G} alt="" />
      </div>
      <div className="about-content">
          <Content title='About us'/>
        <div className="knife-img">
          <img src={images.knife} alt="" />
        </div>
          <Content title='Our History'/>
      </div>
     </div>
    </>
  ) 
};

export default AboutUs;
