import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
   render() {
      return (
         <div className="Home">
            <h1>We empower visionaries with compelling user experiences</h1>
            <button className="contact-us--button" onClick={() => this._renderContactUs()}>
               Contact us
            </button>
         </div>
      );
   }

   _renderContactUs() {
      this.props.renderContactUs("ContactUs");
   }
}

export default Home;
