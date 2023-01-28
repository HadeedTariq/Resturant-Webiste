import React from 'react';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <>
    <div id="chef">
      <div className="chef-content">
        <img src={images.chef} alt="" />
        <div className="chef-text">
          <h4>Chef's Word</h4>
          <h1>What We Believe In</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus architecto atque earum ea magni. Provident a neque iusto voluptatum consequatur velit nostrum, quibusdam labore nesciunt ab? Dicta eos fugiat doloremque?</p>
          <h3>Kevin Luo</h3>
          <img id='sign' src={images.sign} alt="" />
        </div>
      </div>
    </div>
  </>
);

export default Chef;
