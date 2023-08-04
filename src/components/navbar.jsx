import React from 'react';
import './navbar.css';
import profileImage from './fav.svg'; // Replace with the actual path to your profile image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Your logo or name with the image */}
      <div className="logo">
        <img src={profileImage} alt="Profile" className="profile-image" />
        Rishabh Jain
      </div>
      {/* Add your navigation links here */}
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        
        <li><a href="#ContactInfo">Contact</a></li>
        {/* Add more sections/links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
