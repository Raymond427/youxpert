import React, { Component } from 'react';

class Skill extends Component {
   render(){
      return(
         <div className="skill">
            <h4 className="skill--name">{this.props.name}</h4>
            <img src={this.props.image} alt={this.props.name}/>
            <p className="skill--description">{this.props.description[0]}</p>
            <p className="skill--description">{this.props.description[1]}</p>
            <p className="skill--description">{this.props.description[2]}</p>
         </div>
      );
   }
}

export default Skill;
