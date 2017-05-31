import React, { Component } from 'react';
import '../styles/MobileNavbar.css';

class MobileNavbar extends Component {
   render(){
      return(
         <nav className="MobileNavbar">
            <ul className="MobileNavbar-links">
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
         </nav>
      );
   }

   _changeCurrentPage(component){
      this.props.changePage(component);
   }
}

export default MobileNavbar;
