import React, { Component } from 'react';
import ContactUsForm from './ContactUsForm';
import '../styles/App.css'
import '../styles/ContactUs.css';

class ContactUs extends Component {
   constructor(){
      super();
      this.state = { entries: null };
   }
   render() {
      return(
         <div className="contact-us page">
            <div className="call-us">
               <h2 className="contact-us--heading">Call us now</h2>
               <h2 className="contact-us--number">(980) 349-8479</h2>
            </div>
            {this._formState()}
         </div>
      );
   }

   _formState() {
      if (this.state.entries) {
         return(
            <div className="entry-received">
               <h2 className="contact-us--heading entry-received--header">Thank you for your message {this.state.entries.name}!</h2>
               <h2 className="contact-us--heading entry-received--header">We will get back to you shortly</h2>
               <button className="entry-received--button" onClick={() => this._resetForm()}>
                  Submit Another Form
               </button>
            </div>
         );
      }
      else {
         return(
            <div className="message-us">
               <h2 className="contact-us--heading">Send a message</h2>
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
