import React from 'react';
import './Services.css';


function Services () {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">Services</h1>
        <div className="services-list">
          {/* Repeat for each service */}
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Development</h2>
            <p>I build high-quality, scalable, and responsive websites tailored to your business needs...</p>
            <a href="/web">Learn more</a>
          </div>
          <div>
            <i class="fa-solid fa-crop-simple"></i>
            <h2>UI/UX Design</h2>
            <p>I am specialized in crafting visually appealing and intuitive designs that prioritize user experience. My design solutions are rooted in research, creativity, and innovation to ensure your product stands out and meets user expectations.</p>
            <a href="/usx">Learn more</a>
          </div>
          <div>
            <i class="fa-brands fa-app-store"></i>
            <h2>Mobile App Development</h2>
            <p>I create custom mobile applications for both iOS and Android platforms, focusing on performance, speed, and user-friendly interfaces. My apps are designed to engage users and enhance your business presence in the mobile ecosystem.</p>
            <a href="/mob">Learn more</a>
          </div>
          <div>
            <i class="fa-brands fa-digital-ocean"></i>
            <h2>Digital Marketing</h2>
            <p>My digital marketing strategies help you reach your target audience and grow your online presence. From SEO and content marketing to social media management and paid advertising, we provide comprehensive solutions to drive traffic and conversions.</p>                
            <a href="/dig">Learn more</a>
          </div>
          <div>
            <i class="fa-solid fa-people-arrows"></i>
            <h2>Consulting</h2>
            <p>I offer expert consulting services to help you navigate the complexities of digital transformation. I will works closely with you to understand your business goals, develop effective strategies, and implement solutions that drive growth and success.</p>                                
            <a href="/con">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
