import React, { Component } from 'react';
import TeamMateModal from './TeamMateModal';

class TeamMate extends Component {
   constructor(){
      super();
      this.state = { modalShowing: false }
   }

   render(){
      let modal;
      if (this.state.modalShowing) {
         modal = <TeamMateModal name={this.props.name}
                                       image={this.props.image}
                                       title={this.props.title}
                                       key={this.props.id}
                                       id={this.props.id}
                                       unrenderModal={this._renderModal.bind(this)}
                                       />;
      }
      return(
         <div className="team-mate">
            <div className="team-mate-link" onClick={() => this._renderModal()}>
               <img className="team-mate__img" src={this.props.image} alt=""/>
               <h4 className="team-mate__name">{this.props.name}</h4>
               <p className="team-mate__title">{this.props.title}</p>
            </div>
            {modal}
         </div>
      );
   }

   _renderModal() {
      window.scrollTo(0, 0);
      this.setState({ modalShowing: !this.state.modalShowing });
   }
}

export default TeamMate;
