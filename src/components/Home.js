import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
   render() {
      return (
         <div className="Home">
            <h1>WE EMPOWER VISIONARIES WITH COMPELLING USER EXPERIENCES</h1>
            <button className="contact-us--button" onClick={() => this._renderContactUs()}>
               CONTACT US
            </button>
         </div>
      );
   }

   _renderContactUs() {
      this.props.renderContactUs("ContactUs");
   }
}

export default Home;
