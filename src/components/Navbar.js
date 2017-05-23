import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

class Navbar extends Component {
   render() {
      return (
         <nav className="Navbar">
            <img src={logo} className="Navbar-logo" alt="logo" />
            <ul className="Navbar-links">
               <li>
                  <a href="#">
                     HOME
                  </a>
               </li>
               <li>
                  <a href="#">
                     USER EXPERIENCE
                  </a>
               </li>
               <li>
                  <a href="#">
                     WHAT WE DO
                  </a>
               </li>
               <li>
                  <a href="#">
                     OUR TEAM
                  </a>
               </li>
               <li>
                  <a href="#">
                     OUR WORK
                  </a>
               </li>
               <li>
                  <a href="#">
                     CONTACT US
                  </a>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;
