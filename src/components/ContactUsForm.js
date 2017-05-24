import React, { Component } from 'react';

class ContactUsForm extends Component {
   render(){
      return(
         <form className="contact-us-form" onSubmit={this._handleSubmit.bind(this)}>
            <input type="text" placeholder="Name" ref={(input) => this._name = input }></input>
            <input type="text" placeholder="Email" ref={(input) => this._email = input }></input>
            <input type="text" placeholder="Subject" ref={(input) => this._subject = input }></input>
            <input type="phone_number" placeholder="Phone" ref={(input) => this._phone = input }></input>
            <input type="textfield" placeholder="Message" ref={(input) => this._message = input }></input>
            <input type="submit" value="Submit"></input>
         </form>
      );
   }

   _handleSubmit(event){
      event.preventDefault();

      this.props.addEntry(this._name.value, this._email.value, this._subject.value, this._phone.value, this._message.value);
   }
}

export default ContactUsForm;
