import React, { Component } from 'react';

class Ux extends Component {
   render(){
      return(
         <div className="ux" style={{backgroundImage: this.props.background}}>
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
         </div>
      );
   }
}

export default Ux;
