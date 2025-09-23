import React from 'react';
import './MyPortfolio.css';
import image from "../images/work-1.png"
import image2 from "../images/work-2.png"
import image3 from "../images/work-3.png"


function MyPortfolio () {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="work-list">
          {/* Repeat for each project */}
          <div className="work">
            <img src={image} alt="Project 1" />
            <div className="layer">
               <h2>Entertainment</h2>
        <h3>Movie Streaming Platform</h3>
        <p>"A modern movie rental and streaming service that provides users with access to a vast library of films across various genres. The platform offers an intuitive interface for browsing, searching, and watching movies with seamless streaming capabilities and personalized recommendations."</p>
        <a href="https://movie-stream-frontend.vercel.app" target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
            </div>
          </div>
          <div class="work">
                    <img src={image2} alt="Project 2"/>
                    <div class="layer">
                        <h2>E-commerce</h2>
        <h3>Online Grocery Store</h3>
        <p>"A comprehensive grocery and household items e-commerce platform designed to simplify shopping for daily essentials. The website features product categorization, search functionality, cart management, and secure checkout, making grocery shopping convenient and efficient for modern households."</p>
        <a href="https://greencart-beta-eight.vercel.app" target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src={image3} alt="Project 3"/>
                    <div class="layer">
                        <h2>E-commerce</h2>
                        <h3>Car Sales Website</h3>
                        <p>"An innovative e-commerce platform for car dealerships and individual sellers, designed to enhance the online car-buying experience by providing a comprehensive, user-friendly interface."</p>
                            <a href="https://technotronix-frontend-three.vercel.app" target="_blank" rel="noreferrer"><i class="fa-solid fa-link"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src={image2} alt="Project 4"/>
                    <div class="layer">
                        <h2>Travel</h2>
        <h3>Flight Booking System</h3>
        <p>"An advanced flight booking platform that enables users to search, compare, and book flights with ease. The system provides real-time flight availability, price comparisons, flexible date options, and secure booking processing, offering travelers a comprehensive solution for planning their journeys."</p>
        <a href="https://elevatio-client.vercel.app" target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
                    </div>
                </div>
                {/* <div class="work">
                    <img src={image} alt="Project 5"/>
                    <div class="layer">
                        <h2>Social</h2>
                        <h3>Youtube Clone</h3>
                        <p>"A comprehensive clone of the popular video-sharing platform, YouTube, designed to offer users a familiar and engaging experience for discovering, watching, and interacting with video content. The platform includes features for video uploading, viewing, commenting, and channel management, providing a robust alternative to the original YouTube experience."</p>
                            <a href="https://abg-tube.vercel.app" target="_blank" rel="noreferrer"><i class="fa-solid fa-link"></i></a>
                    </div>
                </div> */}
                {/* <div class="work">
                    <img src={image3} alt="Project 6"/>
                    <div class="layer">
                        <h2>Social</h2>
                        <h3>Music App</h3>
                        <p>"A comprehensive music streaming application inspired by platforms like Spotify, designed to provide users with an immersive and personalized music experience. The app allows users to discover, listen to, and manage their favorite music tracks and playlists with features that enhance user engagement and streamline music consumption."</p>
                        <a href="https://abg-music-frnt.vercel.app" target="_blank" rel="noreferrer"><i class="fa-solid fa-link"></i></a>
                    </div>
                </div> */}
                
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">See more</a>
      </div>
    </div>
  );
};

export default MyPortfolio;
