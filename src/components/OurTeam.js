import React, { Component } from 'react';
import Skill from './Skill';
import TeamMate from './TeamMate.js';
import cert from '../images/cert.png';
import graduate from '../images/graduate.png';
import honor from '../images/honor.png';
import dreupic from '../images/dreu.png';
import mikepic from '../images/mike.png';
import raypic from '../images/raymond.jpg';
import jonpic from '../images/jonathan.png';

class OurTeam extends Component {
   render(){
      const skills = this._getSkills();
      const teamMates = this._getTeamMates();

      return(
         <div className="our-team">
            <h1>Our team</h1>
            <div className="skills">
               {skills}
            </div>
            <div className="team">
               {teamMates}
            </div>
         </div>
      );
   }

   _getSkills(){
      const skillsListJSON = [
         { id: 1, name: "Proficient Background", image: graduate, description: ["Systems Engineering", "Computer Science", "Masters of Business Administration"] },
         { id: 2, name: "Quality Certifications", image: cert, description: ["Six Sigma Green Belts from Life Leaders", "Programming Certifications from MIT and UC Berkley", "P.D.C.A. Problem Solving from Lockheed Martin"] },
         { id: 3, name: "Proven Results", image: honor, description: ["Increases in client customer acquisition", "Increases in client revenue", "99% Overall satisfaction rating from clients"] }
      ];

      return skillsListJSON.map((skill) => {
         return(
            <Skill name={skill.name} image={skill.image} description={skill.description} key={skill.id} />
         );
      });
   }

   _getTeamMates(){
      const teamMateListJSON = [
         { id: 1, image: dreupic, name: "Dreu Dixon", title: "Chief Executive Officer" },
         { id: 2, image: mikepic, name: "Mike Caba", title: "Chief Innovation Officer" },
         { id: 3, image: raypic, name: "Raymond Ferrell", title: "Chief Technology Officer" },
         { id: 4, image: jonpic, name: "Johnathan Hazeley", title: "Chief Fianancial Officer" }
      ];

      return teamMateListJSON.map((teamMate) => {
         return(
            <TeamMate
                     image={teamMate.image}
                     name={teamMate.name}
                     title={teamMate.title}
                     key={teamMate.id}
                     id={teamMate.id} />
         );
      });
   }
}

export default OurTeam;
