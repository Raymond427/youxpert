import React, { Component } from 'react';

class Service extends Component {
   render(){
      return(
         <div className="service">
            <h3>{this.props.name}</h3>
            <img src={this.props.img} alt={this.props.name}/>
            <p>{this.props.description}</p>
         </div>
      );
   }
}

export default Service;
