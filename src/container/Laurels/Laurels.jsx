import React from 'react';
import { images } from '../../constants';
import './Laurels.css';
import {data} from '../../constants';
import Rewards from './Rewards';
const Laurels = () => (
  <>
    <div id="award">
      <img className='logo' src={images.logo} alt="" />
      <div className="award-content">
        <div className="award-text">
          <h1>Awards & Recoginition</h1>
          <img src={images.spoon} alt="" />
          <h2>Our Lorels</h2>
          <div className="fetched-content">
            {
              data.awards.map((award,index)=>
              <div className='fetched-rewards' key={index}>
              <Rewards imgUrl={award.imgUrl} title={award.title} subTitle={award.subtitle}/>
              </div>
              )
            }
          </div>
        </div>
        <img className='laurels' src={images.laurels} alt="" />
      </div>
    </div>
  </>
);

export default Laurels;
