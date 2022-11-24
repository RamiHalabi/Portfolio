import React from "react";
import resume from "./Rami Halabi, Resume.pdf";


const Header = () => {
    const name = "Rami Halabi"
    
    // each entry corresponds to a section of the NavBar
    const NavIndex = [
        {
            type: "mail",
            link: "mailto: ramihalabi@outlook.com",
        },
        {
            type: "linkedin",
            link: "https://linkedin.com/in/ramiihalabi",
        },
        {
            type: "github",
            link: "https://github.com/ramihalabi",
        },
        {
            type: "resume",
            link: resume,
        }
    ];

    // Custom toUpperCase function (only want the first letter upper-case)
    const upperCase = (string) =>{

        const upper = string.toUpperCase();
        const remain = string.substring(1,string.length);
        const resultString = upper[0] + remain;
        return resultString;
    };


    // Format each section on the navbar
    const NavBar = NavIndex.map(function(section){  

        return(<>
            <a className={"a "+ section.type} href={section.link} target="_blank" rel="noreferrer" >{upperCase(section.type)}</a> 
        </>)
    });


    // Display header
    return(<>

            <div className="name">{name}</div>
            <div className="navbar">{NavBar}</div>

    </>);
};

export default Header; 