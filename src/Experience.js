import { wait } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useState} from "react";


const Experience = () =>{

    // skills section
    const projects = {
        1:{
            name: 'SOFTWARE DEVELOPMENT INTERN',
            desc: 'Keyhole Software - Lenexa, KS | June 2022–August 2022',
            tech: 'Technologies: JavaScript | React | CSS | GitHub | Azure DevOps | Node.js',
            info: ['Leveraged JavaScript, React, CSS, and Node.js to develop user-requested features and improvements for 2-D design canvas MockOla in an agile environment.',
                'Implemented a modal Help feature UI with React and CSS. Utilized various functional components such as TreeMenu, Dialog, Cards, and Buttons to curate a smooth user experience.',
                'Renovated three legacy Color Pickers that allowed users to use color swatches and provide a modern look.',
                'Gained experience in a team-based agile environment, often employing pair programming for expeditious changes.',
                'Investigated complex bugs in existing code base to improve overall user experience.',
                'Created and reviewed pull requests on Azure DevOps as well as updated tickets and status.'],
        },
        2:{
            name: 'MINECRAFT PLUGINS',
            desc: 'Independent Project - Columbia, MO | December 2021–January 2022',
            tech: 'Technologies: Java (Maven Project) | GitHub',
            info: ['Developed several public plugins on a personal Minecraft server to enhance gameplay for players.',
                'Created a Java data manager that writes to a YAML file to save individual user data.',
                'Utilized HashMap data structure to save and load user data efficiently.',
                'See plugins on GitHub!'],
        },
        3:{
            name: 'DISCORD BOT',
            desc: 'Independent Project - Columbia, MO | January 2022–February 2022',
            tech: 'Technologies: JavaScript | Node.js | Discord',
            info: ['Designed and developed a Discord bot that can be used as a music player with queue, skip, next, and back commands.',
                'Implemented using stacks data structure for a dynamically sized playlist.',
                'Used Node.js to access and make calls to Discord.js and YouTube Data API v3.'],
        },
    }
    const Skills = ['Azure DevOps','CSS/HTML','Java','JavaScript','React','GitHub','C++','Docker','MongoDB','MATLAB','C','Agile','SQL','Azure Data Studio'];
    
    const buildSkills = () => {

        const section = document.getElementById('skillsAnimated');

        // create title 
        const title = document.createElement('div')
        title.className = 'skillTitle'
        title.id = 'skillT'
        title.innerHTML = 'SKILLS'

        // create wrapper for all skills 
        const wrapper = document.createElement('div')
        wrapper.className = 'skillsList'
        wrapper.id = 'wrapper'

        // create skills and populate wrapper
        Skills.forEach(skill => {
  
            // skill
            const div = document.createElement('div')
            div.className = 'skill'
            div.id = 'skillDiv'
            div.innerHTML = skill
            wrapper.append(div)

            // point
            const divP = document.createElement('div')
            divP.innerHTML = '◦'

            // check for last skill (no point)
            if(skill !== Skills.at(Skills.length-1)){ wrapper.append(divP); }
          });

        section.appendChild(title);
        section.appendChild(wrapper);
    };

    // calculates window height to determine when to display node (animation effect)
    const reveal = () => {

        // get nodes that contain .reveal tag
        var reveals = document.querySelectorAll(".reveal");
      
        // check window height to determine when to reveal node
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 125;
      
          // node is partially visible, begin to reveal
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else { reveals[i].classList.remove("active"); }
        }
    }
    window.addEventListener("scroll", reveal);

    useEffect(()=>{
        buildSkills();
    })

return(<>
    <div className="exp">

        <div className="skills reveal" id="skillsAnimated"/>        

        <div className="projects">

            <div className="reveal skillTitle">PROGRAMMING EXPERIENCE</div>
        
                <div className="project reveal">
                    <div className="skillLabel">SOFTWARE DEVELOPMENT INTERN</div>
                    <div className="skillInfo1">Keyhole Software - Lenexa, KS | June 2022–August 2022</div>
                    <div className="skillInfo2">Technologies: JavaScript | React | CSS | GitHub | Azure DevOps | Node.js</div>
                    <div>● Leveraged JavaScript, React, CSS, and Node.js to develop user-requested features and improvements for 2-D design canvas MockOla in an agile environment.</div>
                    <div>● Implemented a modal Help feature UI with React and CSS. Utilized various functional components such as TreeMenu, Dialog, Cards, and Buttons to curate a smooth user experience.</div>
                    <div>● Renovated three legacy Color Pickers that allowed users to use color swatches and provide a modern look.</div>
                    <div>● Gained experience in a team-based agile environment, often employing pair programming for expeditious changes.</div>
                    <div>● Investigated complex bugs in existing code base to improve overall user experience.</div>
                    <div>● Created and reviewed pull requests on Azure DevOps as well as updated tickets and status.</div>
                </div>

                <div className="project reveal">
                    <div className="skillLabel">MINECRAFT PLUGINS</div>
                    <div className="skillInfo1"> Independent Project - Columbia, MO | December 2021–January 2022</div>
                    <div className="skillInfo2">Technologies: Java (Maven Project) | GitHub</div>
                    <div>● Developed several public plugins on a personal Minecraft server to enhance gameplay for players.</div>
                    <div>● Created a Java data manager that writes to a YAML file to save individual user data.</div>
                    <div>● Utilized HashMap data structure to save and load user data efficiently.</div>
                    <div>● See plugins on GitHub!</div>
                </div>
                <div>

                <div className="project reveal" style={{marginBottom: "5%"}}>
                    <div className="skillLabel">DISCORD BOT</div>
                    <div className="skillInfo1">Independent Project - Columbia, MO | January 2022–February 2022</div>
                    <div className="skillInfo2">Technologies: JavaScript | Node.js | Discord</div>
                    <div>● Designed and developed a Discord bot that can be used as a music player with queue, skip, next, and back commands.</div>
                    <div>● Implemented using stacks data structure for a dynamically sized playlist.</div>
                    <div>● Used Node.js to access and make calls to Discord.js and YouTube Data API v3.</div>
                </div>   
            </div>
        </div>
    </div>
</>);}

export default Experience;