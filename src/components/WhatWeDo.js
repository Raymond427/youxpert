import React, { Component } from 'react';
import Service from './Service';

class WhatWeDo extends Component {
   render(){
      return(
         <div className="what-we-do">
            <h1>What We Do</h1>
            <Service img="" name="Web Design" description="We can create your website's visuals and prepare them for development"/>
            <Service img="" name="Web Development" description="Our engineers can turn your design into fully functional software"/>
            <Service img="" name="Logo Design" description="We can create your company's  flagship marketing tool"/>
            <Service img="" name="User Research" description="Want to know your customer's opinion on a product? We'll get it for you"/>
            <Service img="" name="Search Engine Optimization" description="Boost your rank on Google, Yahoo and Bing search results"/>
            <Service img="" name="Web Analytics" description="Learn who visits your site, how long they stay, and what they use it for most"/>
         </div>
      );
   }
}

export default WhatWeDo;
