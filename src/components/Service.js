import React, { Component } from 'react';

class Service extends Component {
   render(){
      return(
         <div className="service">
            <img src={this.props.img} alt=""/>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
         </div>
      );
   }
}

export default Service;
