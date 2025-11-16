import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/song.jpg';
import mock08 from '../assets/images/ecom.jpg';
import mock09 from '../assets/images/fraud.jpg';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Movie Recommendtion System</h2>
                <p>Developed a Hollywood movie recommendation system using machine learning algorithms to provide
personalized suggestions to users.
</p>
            </div>
            <div className="project">
               <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Credit Card fraud detection</h2>
                <p>Developed an AI-driven system to identify and prevent fraudulent credit card transactions.
                </p>
            </div>
            <div className="project">
               <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Comprehensive E-Commerce customer analysis & prediction model 
                </h2>
                <p>Estimates the total value a customer brings, guiding marketing and retention strategies.
                </p>
            </div>
            <div className="project">
               <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Mood Based Music recommendation system 
               </h2>
                <p>Uses OpenCV to analyze facial expressions captured by the webcam and detect the user’s mood in
                real-time.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;