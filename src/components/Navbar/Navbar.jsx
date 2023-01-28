import React,{useState} from 'react';
import images from '../../constants/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css';

const Navbar = () => {
  const [display, setDisplay] = useState({
    transform:"translateY(-100%)",
  })
  let displayNav=()=>{
    setDisplay({
      transform:"translateY(0%)",
      transition:"0.5s",
      display:"flex"
    })
}
let hide=()=>{
  setDisplay({
    transform:"translateY(-100%)"
  })
}
let hideNav=()=>{
  setDisplay({
    transform:"translateY(-100%)",
    transition:"0.5s",
    display:"flex"
  })
}
  return(
  <>
  <nav className="navbar">
    <div className="logo">
      <img src={images.gericht} alt="" />
    </div>
    <ul className="ul">
     
      <li><a href='#home'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#special-menu'>Menu</a></li>
      <li><a href='#award'>Award</a></li>
      <li><a href='#find-us'>Contact</a></li>
    </ul>
    <div className="login">
      <h3>Login/Registration | Book Table</h3>
    </div>
    <div className="ham-burger">
      <GiHamburgerMenu onClick={displayNav} className='Navigator'/>
    </div>
    <ul style={display} className="ul1">
       <div className="cross" onClick={hideNav}>
        <strong>x</strong>
      </div>
      <li><a href='#home' onClick={hide}>Home</a></li>
      <li><a href='#about' onClick={hide}>About</a></li>
      <li><a href='#special-menu' onClick={hide}>Menu</a></li>
      <li><a href='#award' onClick={hide}>Award</a></li>
      <li><a href='#find-us' onClick={hide}>Contact</a></li>
    </ul>
  </nav>
  </>
  )
};

export default Navbar;
