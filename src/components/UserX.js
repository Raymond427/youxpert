import React, { Component } from 'react';
import '../styles/UserX.css';

class UserX extends Component {
   render() {
      return(
         <div className="UserX">
            <h1>WHAT IS USER EXPERIENCE DESIGN?</h1>
            <h3>Every decision we make when building your product is based on the preferences of your target audience</h3>
            <div className="UserX-step1">
               <h5>We Meet With You</h5>
               <p>We sit down with you and learn about your current business and your vision for your future product</p>
            </div>
            <div className="UserX-step2">
               <h5>We Interview Your Audience</h5>
               <p>We interview the audience you are targeting and learn how to make their dream product directly from them</p>
            </div>
            <div className="UserX-step3">
               <h5>We Build Your Product</h5>
               <p>Don't Know How To Build Our Designs? Relax, We Got It!</p>
            </div>
         </div>
      );
   }
}

export default UserX;
