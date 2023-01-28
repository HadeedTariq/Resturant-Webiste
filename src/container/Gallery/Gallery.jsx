import React from 'react';
import { images } from '../../constants';
import { BsInstagram } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const gallerImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  return (
    <>
      <div id="gallery">
        <div className="gallery-content">
          <div className="gallery-text">
            <h3>Intagram</h3>
            <img src={images.spoon} alt="" />
            <h1>Photo Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam reiciendis cupiditate quibusdam adipisci tempora sint ad hic error cum.</p>
            <button id="gallery-btn">View More</button>
          </div>
          <div className="gallery-img">
            {
              gallerImages.map((image, index) =>
                <div className='key' key={index+1}>
                  <img src={image}  />
                  <div className="insta-logo">
                    <BsInstagram className='insta-img' />
                  </div>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
