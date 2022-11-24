import React from "react";
import pfp from "./profilephoto.jpg"

const About = () => {


    // About section text
    const greeting = 'Hello and Welcome!'
    const AboutInfo = [
        [
            'I am a senior at The University Of Oklahoma studying to be a Software Developer.',
            'In my free time I like to stay active and I love learning about the latest technologies.',
        ],
        [
            'As an Entry-Level Developer, I am eager to learn and solve problems to make meaningful contributions to my work.',
            ' I have been described as communicative, adaptable, and regularly maintain an affable demeanor.',

        ],
        [
            'I am more than happy to share more information or meet with you!',
        ],
    ];


    // Format AboutInfo 
    // Select AboutInfo[i]
    const aboutSection = AboutInfo.map(function(element){
  
        // Select AboutInfo[i][j] then format
        const sectionMap = element.map(function(section){         
            return(<>
            <div>{section}</div>    
            </>)
        })

        // Apply styling to selected paragraph (AboutInfo[i][j])
        return(<>
            <div className="styling">
                {sectionMap}
            </div>
        </>);
    });


    // Display About 
    // 1. PFP
    // 2. About text 
    return(<>
        
        <div className="img">
            <img 
                alt="pfp" 
                title="Profile Pic" 
                src={pfp}
                className="pfp" 
            />
         </div> 
            
        <div className="aboutSection">

            <h2 className="aboutHeader">{greeting}</h2>
            <div>{aboutSection}</div>

        </div>
        
     </>);
} 

export default About;