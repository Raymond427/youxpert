import React, { Component } from 'react';
import TeamMate from './TeamMate.js';

class OurTeam extends Component {
   render(){
      return(
         <div className="our-team">
            <h1>Our Team</h1>
            <div className="skills">
               <div className="skill">
                  <h4>Proficient Background</h4>
                  <img alt=""/>
                  <p>Systems Engineering</p>
                  <p>Computer Science</p>
                  <p>Masters of Business Administration</p>
               </div>
               <div className="skill">
                  <h4>Quality Certifications</h4>
                  <img alt=""/>
                  <p>Six Sigma Green Belts from <span>Life Leaders</span></p>
                  <p>Programming Certifications from <span>MIT and UC Berkley</span></p>
                  <p>P.D.C.A. Problem Solving from <span>Lockheed Martin</span></p>
               </div>
               <div className="skill">
                  <h4>Proven Results</h4>
                  <img alt=""/>
                  <p>Increases in client customer acquisition</p>
                  <p>Increases in client revenue</p>
                  <p>99% Overall satisfaction rating from clients</p>
               </div>
            </div>
            <div className="team">
               <TeamMate img="https://static.wixstatic.com/media/ccd5d1_3c2ba25574c44a7cabc3d74a71ea59c6~mv2.png/v1/fill/w_197,h_197,al_c,usm_0.66_1.00_0.01/ccd5d1_3c2ba25574c44a7cabc3d74a71ea59c6~mv2.png" name="Dreu Dixon" title="Cheif Executive Officer" />
               <TeamMate img="https://static.wixstatic.com/media/ccd5d1_6a13fd33584b41ab9104dc24e53e2cdc~mv2.png/v1/fill/w_197,h_197,al_c,lg_1/ccd5d1_6a13fd33584b41ab9104dc24e53e2cdc~mv2.png" name="Mike Caba" title="Cheif Innovation Officer" />
               <TeamMate img="https://static.wixstatic.com/media/ccd5d1_7c8a6151f6ec4666b1a76adefb3b5e60~mv2_d_2335_2337_s_2.jpg/v1/fill/w_197,h_197,al_c,q_80,usm_0.66_1.00_0.01/ccd5d1_7c8a6151f6ec4666b1a76adefb3b5e60~mv2_d_2335_2337_s_2.webp" name="Raymond Ferrell" title="Cheif Technology Officer" />
               <TeamMate img="https://static.wixstatic.com/media/ccd5d1_806e759379014198a3c4dd77595e8dee~mv2.jpg/v1/crop/x_0,y_59,w_725,h_724/fill/w_197,h_197,al_c,q_80,usm_0.66_1.00_0.01/ccd5d1_806e759379014198a3c4dd77595e8dee~mv2.webp" name="Johnathan Hazeley" title="Cheif Fianancial Officer" />
            </div>
         </div>
      );
   }
}

export default OurTeam;
