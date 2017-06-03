import React, { Component } from 'react';
import homebg from '../images/home-bg.jpeg';
import '../styles/Home.css';

class Home extends Component {
   render() {
      return (
         <div className="Home page" style={{backgroundImage: `url(${homebg})`}}>
            <div className="home-shade">
               <div className="home-wrapper">
                  <h1 className="home-wrapper--header">We empower visionaries with compelling user experiences</h1>
                  <button className="contact-us--button" onClick={() => this._renderContactUs()}>
                     Contact us
                  </button>
               </div>
            </div>
         </div>
      );
   }

   _renderContactUs() {
      this.props.renderContactUs("ContactUs");
   }
}

export default Home;
