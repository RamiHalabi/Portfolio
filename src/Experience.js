import React from "react";
import Skills from './Skills'

const Experience = () =>{

    const styles = {
        skills: {
            display: "grid",
            alignItems: "center",
            justifyContent: "center",   
        },
        projects: {
            display: "grid",
            alignItems: "center",
            justifyContent: "center", 
        }, 
    };

    return(
    <>

<div className="exp">


    <div style={styles.skills}>
        <Skills />
    </div>


    <div style={styles.projects}>

    PROGRAMMING EXPERIENCE
    
    <div>
        <div>Software Development Intern</div>
        <div>Keyhole Software - Lenexa, KS | June 2022–August 2022</div>
        <div>Technologies: JavaScript | React | CSS | GitBash | Azure DevOps | Node.js</div>
        <div>● Leveraged JavaScript, React, CSS, and Node.js to develop user-requested features and improvements for2-D design canvas MockOla in an agile environment.</div>
        <div>● Implemented a modal Help feature UI with React and CSS. Utilized various functional components such asTreeMenu, Dialog, Cards, and Buttons to curate a smooth user experience.</div>
        <div>● Renovated three legacy Color Pickers that allowed users to use color swatches and provide a modern look.</div>
        <div>● Gained experience in a team-based agile environment, often employing pair programming for expeditiouschanges.</div>
        <div>● Investigated complex bugs in existing code base to improve overall user experience.</div>
        <div>● Created and reviewed pull requests on Azure DevOps as well as updated tickets and status.</div>
    </div>

    <div>
        <div>Minecraft Plugins</div>
        <div> Independent Project - Columbia, MO | December 2021–January 2022</div>
        <div>Technologies: Java (Maven Project) | GitBash</div>
        <div>● Developed several public plugins on a personal Minecraft server to enhance gameplay for players.</div>
        <div>● Created a Java data manager that writes to a YAML file to save individual user data.</div>
        <div>● Utilized HashMap data structure to save and load user data efficiently.</div>
        <div>● See plugins on GitHub: https://github.com/RamiHalabi/Minecraft-Plugins</div>
     </div>
    <div>

    <div>
        <div>Discord Bot</div>
        <div>Independent Project - Columbia, MO | January 2022–February 2022</div>
        <div>Technologies: JavaScript | Node.js | Discord</div>
        <div>● Designed and developed a Discord bot that can be used as a music player with queue, skip, next, back andmore.</div>
        <div>● Implemented using stacks data structure for a dynamically sized playlist.</div>
        <div>● Used Node.js to access and make calls to Discord.js and YouTube Data API v3.</div>
    </div>   

    </div>


    </div>

    </div>
    </>);
}

export default Experience;