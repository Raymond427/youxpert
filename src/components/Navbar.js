import React, { Component } from 'react';
import logo from '../images/logo.png';
import MobileNavbar from './MobileNavbar';
import '../styles/Navbar.css';
import 'font-awesome/css/font-awesome.css'

class Navbar extends Component {
   constructor(){
      super();
      this.state = { renderMobileNavbar: false };
   }

   render() {
      let mobileNavbar;
      if (this.state.renderMobileNavbar) {
         mobileNavbar = <MobileNavbar changePage={this._changeCurrentMobilePage.bind(this)} toggleNavbar={this._toggleMobileNavbar.bind(this)}/>;
      }

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
               <button className="mobile-navbar--button" onClick={() => this._toggleMobileNavbar()}>
                  <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
               </button>
            </div>
            {mobileNavbar}
         </nav>
      );
   }

   _changeCurrentPage(component) {
      this.props.setCurrentPage(component);
   }

   _toggleMobileNavbar() {
      this.setState({ renderMobileNavbar: !this.state.renderMobileNavbar });
   }

   _changeCurrentMobilePage(component) {
      this._changeCurrentPage(component);
   }
}

export default Navbar;
