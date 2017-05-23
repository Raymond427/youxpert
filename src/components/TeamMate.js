import React, { Component } from 'react';

class TeamMate extends Component {
   render(){
      return(
         <div className="team-mate">
            <img className="team-mate__img" src={this.props.img} alt=""/>
            <p className="team-mate__name">{this.props.name}</p>
            <p className="team-mate__title">{this.props.title}</p>
         </div>
      );
   }
}

export default TeamMate;
