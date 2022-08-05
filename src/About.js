import React from "react";
import pfp from "./profilephoto.jpg"

const About = () =>{


    return(
        <>
            <div className="aboutSection">
                <h2>Hello and Welcome!</h2>
                <body>
                    I am a senior at The University Of Oklahoma studying to by a Software Developer.
                </body>
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