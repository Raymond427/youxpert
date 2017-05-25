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
      this.state = { currentPage: <Home renderContactUs={this._setPage.bind(this)}/> };
   }

   render() {
      return (
         <div className="app">
            <Navbar setCurrentPage={this._setPage.bind(this)}/>
            <div className="page">
               {this.state.currentPage}
            </div>
            <Footer/>
         </div>
      );
   }

   _setPage(componentName) {
      if (componentName === "Home") {
         this.setState({ currentPage: <Home renderContactUs={this._setPage.bind(this)}/> });
      } else if (componentName === "UserX") {
         this.setState({ currentPage: <UserX/> });
      } else if (componentName === "WhatWeDo") {
         this.setState({ currentPage: <WhatWeDo/> });
      } else if (componentName === "OurTeam") {
         this.setState({ currentPage: <OurTeam/> });
      } else if (componentName === "OurWork") {
         this.setState({ currentPage: <OurWork/> });
      } else if (componentName === "ContactUs") {
         this.setState({ currentPage: <ContactUs/> });
      }
   }
}

export default App;
