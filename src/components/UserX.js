import React, { Component } from 'react';
import code from '../images/code.png';
import consulting from '../images/consulting.jpeg';
import userTesting from '../images/user-testing.jpg';
import Ux from './Ux';
import '../styles/UserX.css';

class UserX extends Component {
   render() {
      const userx = this._getUserX();

      return(
         <div className="UserX page">
            <h1 className="UserX--header">What is user experience design?</h1>
            <h3 className="subheader">Every decision we make when building your product is based on the preferences of your target audience</h3>
            <div className="UserX--steps">
               {userx}
            </div>
         </div>
      );
   }

   _getUserX(){
      const userXListJSON = [
         { id: 1, title: "We Meet With You", description: "We sit down with you and learn about your current business and your vision for your future product", background: consulting },
         { id: 2, title: "We Interview Your Audience", description: "We interview the audience you are targeting and learn how to make their dream product directly from them", background: userTesting },
         { id: 3, title: "We Build Your Product", description: "Don't Know How To Build Our Designs? Relax, We Got It!", background: code }
      ];

      return userXListJSON.map((userX) => {
         return(
            <Ux title={userX.title} description={userX.description} background={userX.background} key={userX.id} />
         );
      });
   }
}

export default UserX;
