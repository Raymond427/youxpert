import React, { Component } from 'react';
import captia from '../images/catia.jpg';
import skunk from '../images/Skunk.jpg';
import lm from '../images/LM.jpg';
import UNCC from '../images/UNCC.png';
import sixsigma from '../images/SixSigma.png';
import hp from '../images/HP.png';
import code2040 from '../images/CODE2040.png';
import wfmam from '../images/WFMAM.png';
import dow from '../images/Dow.png';
import encap from '../images/encapturereality.png';
import c5 from '../images/carbonfive.png';
import u2g from '../images/U2G.png';
import enow from '../images/enow.png';
import '../styles/TeamMateModal.css';

class TeamMateModal extends Component {
   render(){
      const teamMate = this._fetchTeamMate(this.props.id);
      const experiences = this._formatExperiences(teamMate.experience);
      const certifications = this._formatCertifications(teamMate.certifications);

      return(
         <div className="modal--shade">
            <div className="modal">
               <button className="modal--close-button" onClick={() => this._unRender()}>X</button>
               <img className="modal--portrait" alt={this.props.name} src={this.props.image} />
               <h2 className="modal--name">{this.props.name}</h2>
               <p className="modal--title">{this.props.title}</p>
               <p className="modal--experience-header">Experience</p>
               <div className="experiences">
                  {experiences}
               </div>
               <p className="modal--description">{teamMate.description}</p>
               <div className="certifications">
                  {certifications}
               </div>
            </div>
         </div>
      );
   }

   _fetchTeamMate(id){
      const teamMateListJSON = [
         {
            id: 1,
            description: "From solving complex challenges with rising startup companies, to working with one of the world's most advanced R&D programs, Dreu has a true passion for disruptive innovation.\n\nFavorite Scripture: Proverbs 3:5-6",
            experience: [{ image: lm, caption: "Lockheed Martin" }, { image: skunk, caption: "Skunkworks Advanced Development" }, { image: UNCC, caption: "Systems Engineering" }],
            certifications: [{ image: captia, caption: "CATIA V5 Lockheed Martin Certification for 3D Modeling" }, { image: sixsigma, caption: "Six Sigma Green Belt for Project Efficiency" }]
         },
         {
            id: 2,
            description: "Michael is a tech entrepreneur and graduate from the University of North Carolina at Charlotte with a Bachelor of Science in Systems Engineering and Minor in General Mathematics. He is a Cohort of the National Science Foundation I-Corps program managed by Ventureprise, which is an evidence-based entrepreneurship and customer discovery focused program. Michael is also Co-Founder of EnCapture Reality, a premium real estate marketing and virtual reality company that helps bring listings and venues to life with immersive expressions that is more than virtual tours.",
            experience: [{ image: u2g, caption: "Unite2Giv" }, { image: enow, caption: "E Now" }, { image: UNCC, caption: "Systems Engineering" }],
            certifications: [{ image: sixsigma, caption: "Six Sigma Green Belt for Project Efficiency" }, { image: encap, caption: "Co-Founder of Encapture Reality" }]
         },
         {
            id: 3,
            description: "After discovering computer science through digital learning platforms like edX and Khan Academy, Raymond enjoys collecting certificates from the world's best institutions as well as building web apps and VR experiences.",
            experience: [{ image: hp, caption: "Hewlett-Packard" }, { image: c5, caption: "Carbon Five" }, { image: code2040, caption: "CODE2040" }],
            certifications: null
         },
         {
            id: 4,
            description: "While alternating between his role as a Manufacturing and Design Engineer at Dow Chemical and an engineering student at UNC Charlotte. Jonathan discovered his passion for Business Performance Improvement and obtained his Masters in Management at Wake Forest University to further develop this skill set.",
            experience: [{ image: wfmam, caption: "Wake Forest MAM" }, { image: dow, caption: "Dow Chemical" }, { image: UNCC, caption: "Mechanical Engineering" }],
            certifications: null
         }
      ];

      for(let teamMate of teamMateListJSON) {
         if(teamMate.id === id) {
            return teamMate;
         }
      }
   }

   _formatExperiences(experiences) {
      if (experiences) {
         let id = 0;
         return experiences.map((experience) => {
            return (
               <div className="experience" key={id += 1}>
                  <img className="experience-img" src={experience.image} alt={experience.caption} />
                  <p className="experience-name">{experience.caption}</p>
               </div>
            );
         });
      }
   }

   _formatCertifications(certifications) {
      if (certifications) {
         let id = 0;
         return certifications.map((certification) => {
            return (
               <div className="certification" key={id += 1}>
                  <img className="certification-img" src={certification.image} alt={certification.caption}/>
                  <p className="certification-name">{certification.caption}</p>
               </div>
            );
         });
      }
   }

   _unRender() {
      this.props.unrenderModal();
   }
}

export default TeamMateModal;
