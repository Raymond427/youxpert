import React, { Component } from 'react';
import ContactUsForm from './ContactUsForm';

class ContactUs extends Component {
   constructor(){
      super();
      this.state = { entries: null };
   }
   render() {
      return(
         <div className="contact-us">
            <div className="call-us">
               <h2>Call Us Now</h2>
               <h4>(980) 349-8479</h4>
            </div>
            {this._formState()}
         </div>
      );
   }

   _formState() {
      if (this.state.entries) {
         return(
            <div className="entry-received">
               <h3>Thank you for your message {this.state.entries.name}!</h3>
               <h3>We will get back to you shortly</h3>
               <button onClick={() => this._resetForm()}>
                  Submit Another Form
               </button>
            </div>
         );
      }
      else {
         return(
            <div className="message-us">
               <h2>Send Us A Message</h2>
               <ContactUsForm addEntry={this._addEntry.bind(this)}/>
            </div>
         );
      }
   }

   _resetForm(){
      this.setState({ entries: null });
   }

   _addEntry(name, email, subject, phone, message){
      const entry = {
         id: 1,
         name,
         email,
         subject,
         phone,
         message
      };
      this.setState({ entries: entry });
   }
}

export default ContactUs;
