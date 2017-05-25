import React, { Component } from 'react';
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
      this.state = { currentPage: <Home/> };
   }

   render() {
      return (
         <div className="App">
            <Navbar setCurrentPage={this._setPage.bind(this)}/>
            {this.state.currentPage}
            <Footer/>
         </div>
      );
   }

   _setPage(component) {
      this.setState({ currentPage: component });
   }
}

export default App;
