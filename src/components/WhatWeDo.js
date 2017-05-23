import React, { Component } from 'react';
import analytics from '../images/analytics.png';
import design from '../images/design.png';
import development from '../images/development.png';
import searchRank from '../images/search-rank.png';
import userResearch from '../images/user-research.png';
import webDesign from '../images/web-design.png';

import Service from './Service';

class WhatWeDo extends Component {
   render(){
      const services = this._getServices();
      
      return(
         <div className="what-we-do">
            <h1>What We Do</h1>
            {services}
         </div>
      );
   }

   _getServices(){
      const servicesListJSON = [
         { image: webDesign, name: "Web Design", description: "We can create your website's visuals and prepare them for development" },
         { image: development, name: "Web Development", description: "Our engineers can turn your design into fully functional software" },
         { image: design, name: "Logo Design", description: "We can create your company's  flagship marketing tool" },
         { image: userResearch, name: "User Research", description: "Want to know your customer's opinion on a product? We'll get it for you" },
         { image: searchRank, name: "Search Engine Optimization", description: "Boost your rank on Google, Yahoo and Bing search results" },
         { image: analytics, name: "Web Analytics", description: "Learn who visits your site, how long they stay, and what they use it for most" }
      ];

      return servicesListJSON.map((service) => {
         return(
            <Service img={service.image} name={service.name} description={service.description}/>
         );
      });
   }
}

export default WhatWeDo;
