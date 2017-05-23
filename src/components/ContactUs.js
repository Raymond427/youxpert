import React, { Component } from 'react';

class ContactUs extends Component {
   render() {
      return(
         <div className="contact-us">
            <div className="call-us">
               <h2>Call Us Now</h2>
               <h4>(980) 349-8479</h4>
            </div>
            <div className="message-us">
               <h2>Send Us A Message</h2>
               <form>
                  <input type="text" placeholder="Name"></input>
                  <input type="text" placeholder="Email"></input>
                  <input type="text" placeholder="Subject"></input>
                  <input type="phone_number" placeholder="Phone"></input>
                  <input type="textfield" placeholder="Message"></input>
                  <input type="submit" value="Submit"></input>
               </form>
            </div>
         </div>
      );
   }
}

export default ContactUs;
