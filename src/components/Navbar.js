import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

class Navbar extends Component {
   render() {
      return (
         <nav className="Navbar">
            <div className="Navbar-wrapper">
               <img src={logo} className="Navbar-logo" alt="logo" onClick={() => this._changeCurrentPage("Home")} />
               <ul className="Navbar-links">
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("Home")}>
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("UserX")}>
                        User experience
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("WhatWeDo")}>
                        What we do
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("OurTeam")}>
                        Our team
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("OurWork")}>
                        Our work
                     </a>
                  </li>
                  <li>
                     <a href="#" onClick={() => this._changeCurrentPage("ContactUs")}>
                        Contact us
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }

   _changeCurrentPage(component) {
      this.props.setCurrentPage(component);
   }
}

export default Navbar;
