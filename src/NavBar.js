import React from "react";
import resume from "./Rami Halabi, Resume.pdf";

const NavBar = () => {
    
    const mail = "mailto: ramihalabi@outlook.com";
    const linkedin = "https://linkedin.com/in/ramiihalabi";
    const github = "https://github.com/ramihalabi";
    const dlName = "Rami Halabi, Resume.pdf";




    return(<>
        <a className="a mail" href={mail} >Mail</a>
        <a className="a linkedin" href={linkedin} >LinkedIn</a>
        <a className="a github" href={github}>GitHub</a>
        <a className="a resume" href={resume} download={dlName}>Resume</a>   
    </>);

}

export default NavBar;