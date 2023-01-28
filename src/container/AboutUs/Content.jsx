import React from 'react'
import '../AboutUs/AboutUs.css'
import { images } from '../../constants'
function Content({ title }) {
    return (
        <>
    <div className="about-page">
        <div className="about-heading">
            <h1>{title}</h1>
            <img src={images.spoon} alt="" />
        </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde animi nisi asperiores laudantium. Voluptatum laborum odio vero dolore fuga!</p>
            <button className="about-btn">Know More</button>
    </div>
        </>
    )
}

export default Content