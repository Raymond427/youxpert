import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import UserX from './UserX';
import WhatWeDo from './WhatWeDo';
import OurTeam from './OurTeam';
import OurWork from './OurWork';
import ContactUs from './ContactUs';
import Footer from './Footer';

class App extends Component {
   constructor(){
      super();
      this.state = { currentPage: <OurTeam/> };
   }

   render() {
      return (
         <div className="App">
            <Navbar/>
            {this.state.currentPage}
            <Footer/>
         </div>
      );
   }
}

export default App;
