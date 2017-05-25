import React, { Component } from 'react';

class OurWork extends Component {
   render(){
      const projects = this._getProjects();

      return(
         <div className="our-work">
            <h1>Our work</h1>
            <h2>
               Below are some examples of our latest projects. To request more examples or to request a more detailed case study, please <a href="#" onClick={() => this._renderContactUs()}>contact us</a>
            </h2>
            <div className="projects">
               {projects}
            </div>
         </div>
      );
   }

   _getProjects(){
      const projectsJSON = [
         { title: "Relax, Let Us Work", image: "", url: "http://www.relaxletuswork.com/", subtitle: "Personal Concierge", description: "Developed the startup business brand, which included the business logo and website " },
         { title: "Advancing Innovative Minds", image: "", url: "http://www.aimuncc.org", subtitle: "Entrepreneurial Non-profit Organization", description: "Served as catalysts for the organizations branding, from conception to official launch." },
         { title: "Dixon Social Interactive Services", image: "", url: "http://dixonsocial.com/", subtitle: "Healthcare Services", description: "Supported in strengthening the business model  through implementing Six Sigma " },
         { title: "Zabra", image: "", url: "http://zabra.com/", subtitle: "Parental Monitoring Software", description: "Through live testing with their customers, conducted a UX Case Study on the Zabra Web application." },
         { title: "Freedom Family Foundation", image: "", url: "http://www.freedomfamilyfoundation.com/", subtitle: "Health and Wellness Non-profit", description: "Matured the organizational brand, which included the business logo and website " },
         { title: "Life Leaders", image: "", url: "http://www.golifeleaders.com/", subtitle: "Professional Development and Coaching", description: "Conducted UX Research, provided Business Model consulting, and developed their website." }
      ];

      let id = 0;
      return projectsJSON.map((project) => {
         return(
            <a href={project.url} target="blank" key={id += 1}>
               <div className="project" style={{backgroundImage: project.image}}>
                  <h5>{project.title}</h5>
                  <p>{project.subtitle}</p>
                  <p>{project.description}</p>
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
