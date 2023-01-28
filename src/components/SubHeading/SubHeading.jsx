import React from 'react';
import "../../container/Header/Header.css"
import { images } from '../../constants'
const SubHeading = () => (
  <div className='sub-heading'>
    <div className="content">
      <h3>Chase the new flavour</h3>
      <img src={images.spoon} alt="" />
      <h1 className="heading">
        The Key To Find Dining
      </h1>
      <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi distinctio, illum molestiae id hic cumque, aperiam beatae magni exercitationem alias a quaerat .</h3>
      <button className='btn' id='explore-btn'>Explore Menu</button>
    </div>
    <div className="home-img">
      <img id='home-image' src={images.welcome} alt="welcome image" />
    </div>
  </div>
);

export default SubHeading;
