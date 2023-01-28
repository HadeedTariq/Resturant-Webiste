import React from 'react'
import "./Laurels.css"
function Rewards({imgUrl,title,subTitle}) {
  return (
    <div className="rewards">
        <img src={imgUrl} alt="" />
        <div className="reward-text">
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    </div>
  )
}

export default Rewards