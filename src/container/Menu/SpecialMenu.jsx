import React from 'react';
import { images,data } from '../../constants';
import { MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <>
  <div id="special-menu">
    <div className="special-heading">
      <h3>Menu That Fit's You Pallate</h3>
      <img src={images.spoon} alt="" />
      <h1>Today's Special</h1>
    </div>
    <div className="menu-items">
      <div className="wine">
        {
          data.wines.map((wine,index)=>{
           return <MenuItem key={index} title={wine.title} price={wine.price} tag={wine.tags}/>
          })
        }
      </div>
      <img src={images.menu} alt="" />
      <div className="cocktails">
        {
          data.cocktails.map((cocktail,index)=>{
            return <MenuItem key={index} title={cocktail.title} price={cocktail.price} tag={cocktail.tags}/>
          })
        }
      </div>
    </div>
    <div className="btn1">
      <button>View More</button>
    </div>
  </div>
  </>
);

export default SpecialMenu;
