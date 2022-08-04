import React from "react";
import resume from "./Rami Halabi, Resume.pdf";

const NavBar = () => {




    return(<>

    <a className="a mail" href="mailto: ramihalabi@outlook.com" >Mail</a>
    <a className="a linkedin" href="https://linkedin.com/in/ramiihalabi" >LinkedIn</a>
    <a className="a github" href="https://github.com/ramihalabi">GitHub</a>
    <a className="a resume" href={resume} download="Rami Halabi, Resume.pdf">Resume</a>
    
    </>);

}

export default NavBar;