import React,{useRef,useState} from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef=useRef()
  const handleClick=async()=>{
    await setPlayVideo((prevVideo)=>!prevVideo)
    if(playVideo){
       videoRef.current.play();
    }else{
      videoRef.current.pause();
    }
  }
   return(
     <>
     <div id="intro">
      <video className='intro-video'
      ref={videoRef}
      src={meal}
      controls={false}
      type='video/mp4'
      loop
      muted>
      </video>
      <div className="trigger-buttons">
        <button id='pause-play-btn' >
          {
            playVideo?(
              <BsFillPlayFill onClick={handleClick} className='btn-style'/>
            ):(
              <BsPauseFill onClick={handleClick} className='btn-style'/>
            )
          }
        </button>
      </div>
     </div>
     </>
   );
}

export default Intro;
