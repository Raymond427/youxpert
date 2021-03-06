import React, { Component } from 'react';
import '../styles/OurWork.css';
import aim from '../images/aimuncc.png';
import lifeleaders from '../images/LifeLeaders.png';
import rluw from '../images/RLUW.png';
import zabra from '../images/Zabra.png';

class OurWork extends Component {
   render(){
      const projects = this._getProjects();

      return(
         <div className="our-work page">
            <h1 className="our-work--header">Our work</h1>
            <h3 className="subheader">Below are some examples of our latest projects. To request more examples or to request a more detailed case study, please <a href="#" onClick={() => this._renderContactUs()}>contact us</a></h3>
            <div className="projects">
               {projects}
            </div>
         </div>
      );
   }

   _getProjects(){
      const projectsJSON = [
         { title: "Relax, Let Us Work", image: rluw, url: "http://www.relaxletuswork.com/", subtitle: "Personal Concierge", description: "Developed the startup business brand, which included the business logo and website " },
         { title: "Advancing Innovative Minds", image: aim, url: "http://www.aimuncc.org", subtitle: "Entrepreneurial Non-profit Organization", description: "Served as catalysts for the organizations branding, from conception to official launch." },
         { title: "Dixon Social Interactive Services", image: "", url: "http://dixonsocial.com/", subtitle: "Healthcare Services", description: "Supported in strengthening the business model  through implementing Six Sigma " },
         { title: "Zabra", image: zabra, url: "http://zabra.com/", subtitle: "Parental Monitoring Software", description: "Through live testing with their customers, conducted a UX Case Study on the Zabra Web application." },
         { title: "Freedom Family Foundation", image: "", url: "http://www.freedomfamilyfoundation.com/", subtitle: "Health and Wellness Non-profit", description: "Matured the organizational brand, which included the business logo and website " },
         { title: "Life Leaders", image: lifeleaders, url: "http://www.golifeleaders.com/", subtitle: "Professional Development and Coaching", description: "Conducted UX Research, provided Business Model consulting, and developed their website." }
      ];

      let id = 0;
      return projectsJSON.map((project) => {
         return(
            <a href={project.url} className="project-link" target="blank" key={id += 1}>
               <div className="project" style={{backgroundImage: `url(${project.image})`}}>
                  <div className="project--overlay">
                     <h5>{project.title}</h5>
                     <p>{project.subtitle}</p>
                     <p>{project.description}</p>
                  </div>
               </div>
            </a>
         );
      });
   }

   _renderContactUs(){
      this.props.renderContactUs("ContactUs");
   }
}

export default OurWork;
