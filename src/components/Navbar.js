import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/Navbar.css';
import Home from './Home';
import UserX from './UserX';
import WhatWeDo from './WhatWeDo';
import OurTeam from './OurTeam';
import OurWork from './OurWork';
import ContactUs from './ContactUs';

class Navbar extends Component {
   render() {
      return (
         <nav className="Navbar">
            <img src={logo} className="Navbar-logo" alt="logo" onClick={() => this._changeCurrentPage(<Home/>)}/>
            <ul className="Navbar-links">
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<Home/>)}>
                     HOME
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<UserX/>)}>
                     USER EXPERIENCE
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<WhatWeDo/>)}>
                     WHAT WE DO
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<OurTeam/>)}>
                     OUR TEAM
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<OurWork/>)}>
                     OUR WORK
                  </a>
               </li>
               <li>
                  <a href="#" onClick={() => this._changeCurrentPage(<ContactUs/>)}>
                     CONTACT US
                  </a>
               </li>
            </ul>
         </nav>
      );
   }

   _changeCurrentPage(component) {
      this.props.setCurrentPage(component);
   }
}

export default Navbar;
