import React, { Component } from 'react';

class ContactUsForm extends Component {
   render(){
      return(
         <form className="contact-us-form" onSubmit={this._handleSubmit.bind(this)}>
            <input id="contact-us-form--name" type="text" placeholder="Name" ref={(input) => this._name = input }></input>
            <input id="contact-us-form--email" type="text" placeholder="Email" ref={(input) => this._email = input }></input>
            <input type="text" placeholder="Subject" ref={(input) => this._subject = input }></input>
            <input type="phone_number" placeholder="Phone" ref={(input) => this._phone = input }></input>
            <textarea form="contact-us-form" id="contact-us-form--textarea" placeholder="Message" ref={(input) => this._message = input }></textarea>
            <input type="submit" value="Send"></input>
         </form>
      );
   }

   _handleSubmit(event){
      event.preventDefault();
      this.props.addEntry(this._name.value, this._email.value, this._subject.value, this._phone.value, this._message.value);
   }
}

export default ContactUsForm;
