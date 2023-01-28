import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tag}) => (
  <div className='item'>
    <div className="fetched-data">
      <p>{title}</p>
      <div className="tail"></div>
      <p>{price}</p>
    </div>
    <div className="tag">
      <p>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
