import React from "react";
import pfp from "./profilephoto.jpg"

const About = () =>{


    return(
        <>
            <div className="aboutSection">
                <h2 className="aboutHeader">Hello and Welcome!</h2>

                <div className="styling">
                I am a senior at The University Of Oklahoma studying to be a Software Developer.
                In my free time I like to stay active and I love learning about the latest technologies.
                </div>
            
                <div className="styling">
                As an Entry-Level Developer, I am eager to learn and solve problems to make meaningful contributions to my work. 
                I have been described as communicative, adaptable, and regularly maintain an affable demeanor.                     
                </div>

                <div className="styling">
                I am more than happy to share more information or meet with you! 
                </div>
                
                <div className="styling">
                EmailButton LinkedInButton
                </div>
            </div>
    
            <img 
            alt="pfp" 
            title="ppfp" 
            src={pfp}
            className="pfp" />
  
        </>
    )

} 

export default About;